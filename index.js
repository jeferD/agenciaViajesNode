import  express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.DB_HOST);


const app = express();


//conectar a la BD
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error => console.log(error,'Base de datos fallo'))

const port = process.env.PORT || 4000;
//agregar router

//Habilitar pug
app.set('view engine', 'pug');

//propio midelware Obtener año actual
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes";
    next();
});

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//definir la carpeta public
app.use(express.static('public/Materiales'));

app.use('/', router);

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})