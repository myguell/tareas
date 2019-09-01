var express = require('express');
var router = express.Router();
var Canciones=require('../models/canciones.model');

router.post('/',function(req, res, next) {
    let u=new Canciones(req.body);
    u.save((err,canciones)=>{
      if(err){
        return res.status(302),json({error:err,estado:'fail'});
      }
      if(canciones){
        return res.status(200).json({canciones:canciones,estado:'Registrado correctamente'});
      }else
      return res.status(302),json({error:'no se que paso', estado:'fail'});
    });
  });
  
  router.get('/', function(req, res, next) {
    Canciones.find({},(err,query)=>{
       if(err){
        return res.status(302).json({lista:[],error:err,estado:'fail'});
  
       }
       if(!query){
         return   res.status(302).json({lista:[],error:'no se que paso',estado:'fail'});
       }
      return res.status(200).json({lista:query,estado:'ok'});
      
     });
  });

module.exports = router;
