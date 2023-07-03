const express = require('express');
const router = express.Router();

const pool = require('../database');

//Ruta donde se encuentra el formulario para insertar datos
router.get('/add', (req, res) =>{
    res.render('links/add');
});

//Ruta el cual recibe el servidor para insertar los datos a la BD
router.post('/add', async(req,res)=>{
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    res.redirect('/links');
});

//Ruta que se usa para mostrar los datos que se encuentran en la BD
router.get('/', async(req,res) =>{
    const links = await pool.query('SELECT * FROM links');
    res.render('links/list', { links });
})

module.exports = router;