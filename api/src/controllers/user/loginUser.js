const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');



const loginUser=(req,res)=>{ 
    let {Username,email,password}=req.body;
    console.log(email,password,Username);
    let user=await  userSchema.findAll({where:{username:Username}});
    console.log(user);
    if(user){
      const igual=bcrypt.compareSync(password,user[0].password);
      console.log(igual);
       if(user[0].username === Username && igual && user[0].email === email){
         res.status(200).json({success: createToken(user[0])});

       }else{
       return  res.status(404).json('el usuario  es invalido')
       }
    }else{
       return  res.status(404).json('el usuario/pas  es invalido')
    };
 
 function createToken (user){   //creo el token
     const payload={
             userId:user.dni,
             usermail:user.email,
             createdAt:moment().unix(),
             expiredAt:moment().add(30,'minutes').unix()
     }
     return jwt.encode(payload,'clave secreta');

 };


}

module.exports = loginUser;