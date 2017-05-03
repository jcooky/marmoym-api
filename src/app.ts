import * as http from 'http';
import * as express from 'express';

const config = require('./config/server.config.dev.json');
// import * as config from './config/server.config.dev.json';
// import * as models from './models';
const models = require('./models');

// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import initializeDb from './db';
// import middleware from './middleware';
// import api from './api';
// import config from './config.json';

let app = express();
app.server = http.createServer(app);

app.server.listen(process.env.PORT || config.port);
console.log(`Started on port ${app.server.address().port}`);

// logger
// app.use(morgan('dev'));

// 3rd party middleware
// app.use(cors({
//   exposedHeaders: config.corsHeaders
// }));

// app.use(bodyParser.json({
//   limit : config.bodyLimit
// }));

// // connect to db
// initializeDb( db => {
//
//   // internal middleware
//   app.use(middleware({ config, db }));
//
//   // api router
//   app.use('/api', api({ config, db }));
//
//   app.server.listen(process.env.PORT || config.port);
//
//   console.log(`Started on port ${app.server.address().port}`);
// });

export default app;