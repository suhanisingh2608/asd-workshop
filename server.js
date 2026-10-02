const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();

const PORT = 3000;

const cache = {};

const pathToFile = path.join(__dirname, 'db.json');


// Read file
async function readFile() {
    try {
        const data = await fs.readFile(pathToFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}


// Read file with delay
async function readFileWithDelay() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    });
let products = await readFile();
return products;
}


// Get all products
app.get('/products', async (req, res) => {
    try {
        let key = req.url;

        let value = cache[key];

        if (value) {
            return res.json(value);
        }

        const products = await readFileWithDelay();

        value = products;

        cache[key] = value;

        return res.json(value);

    } catch (error) {
        console.error('Error reading file:', error);
    }
});


// Get product by ID
app.get('/products/:id', async (req, res) => {
    try {
        let key = req.url;

        let value = cache[key];

        if (value) {
            return res.json(value);
        }

        const products = await readFileWithDelay();

        let { id } = req.params;

        id = Number(id);

        let product = products.find((item) => {
            return item.id === id;
        });

        value = product;

        cache[key] = value;

        return res.json(value);

    } catch (error) {
        console.error('Error reading file:', error);
    }
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});