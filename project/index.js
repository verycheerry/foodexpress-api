const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to FoodExpress API");
});

app.get('/foods', (req, res) => {
    res.json([
        { id: 1, name: "Burger" },
        { id: 2, name: "Pizza" },
        { id: 3, name: "Noodles" }
    ]);
});

app.get('/restaurants', (req, res) => {
    res.json([
        { id: 1, name: "Burger King" },
        { id: 2, name: "Pizza Hut" },
        { id: 3, name: "Noodle House" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
