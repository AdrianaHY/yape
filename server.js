const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model

const app = express();

const db  = levelup('./api/users', {valueEncoding: 'json'});



// app.listen(3000);
const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(format));

let router = express.Router();

//
app.use("/data", express.static(__dirname + "/api"));
app.use("/static", express.static(__dirname + "/node_modules"));
app.use("/static", express.static(__dirname + "/public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/views/primera.html")
});
router.get('/', (req, res) => {
  res.json({ name: 'yape-api',version: "0.0.1"});

});

app.use('/api',apiUsers(router,db));
//esto es para las rutas del api
// app.get('/',(req,res)=>{
//
// });
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
