import express from 'express';

import indexRouter from './routes/index.js';

let app = express();
app.use(express.json());
app.use('/', indexRouter);

export default app;
