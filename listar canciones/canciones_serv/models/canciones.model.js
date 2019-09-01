var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var esquema=new Schema({
    nombre:{type:String,required:true},
    genero:{type:String},
    artista:{type:String},
});
module.exports=mongoose.model('Canciones',esquema);