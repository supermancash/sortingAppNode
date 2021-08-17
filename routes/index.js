import express from 'express';
import carPolices from '../carPolicies.js';

let router = express.Router();

router.get('/getpolicy', (req, res) => {
  if(req.query.id === undefined) res.send(Array.from(carPolices));
  let id = req.query.id;
  res.send(carPolices.get(id));
});

router.post('/setpolicy', (req, res) =>{
  let id = req.query.id;
  carPolices.set(id, req.body);
  res.send(Array.from(carPolices));
});


export default router;
