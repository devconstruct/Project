
const mysql = require('mysql');

const { promisify } = require('util');

const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexion con la base de datos no es posible ');
        }
        if(err.code === 'ER_CON_COUND_ERROR'){
            console.error('Existe mas de una concexion a la BD');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('La conexion a la BD fue rechazada');
        }
    }

    if(connection) connection.release();
    console.log('La conexion a la BD es correcta');
    return;
});

pool.query = promisify(pool.query)
module.exports = pool;