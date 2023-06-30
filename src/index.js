const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

//inicializamos la variable express
const app = express();

//Configuraciones generales
app.set('port', process.env.PORT || 3000);
//usaremos la carpeta views como principla de nuestros 
exphbs.create(({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))
  app.set('view engine', '.hbs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales)
app.use((req, res, next) =>{
    next();
});


//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//iniciar el server
app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
});