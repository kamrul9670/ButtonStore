const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthVaildation');


   const router = require('express').Router() ;

    
      router.post('/login' , loginValidation , login)
     router.post('/signup' , signupValidation ,  signup )

    

     module.exports = router ;