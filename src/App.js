import React from 'react';
import ItemList from './components/ItemList';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">GoBananas Assignment</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <ItemList />
            </Container>
        </>
    );
}

export default App;
