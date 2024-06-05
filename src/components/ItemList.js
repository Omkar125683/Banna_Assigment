import React, { useState, useEffect } from 'react';
import { Container, TextField, List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setItems(response.data);
                setFilteredItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        setFilteredItems(
            items.filter(item => 
                item.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, items]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Item List
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <CircularProgress />
            ) : (
                <List>
                    {filteredItems.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.title} secondary={item.body} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default ItemList;
