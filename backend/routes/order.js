const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/order', async (req, res) => {

    try{
          const { name, email, phone, whatsapp, accessories, country, state } = req.body;
  
          user = await User.create({
          name, email, phone, whatsapp, accessories, country, state
          });
  
          res.status(200).json({success: true, message: 'Accessories Ordered Successfully!'});
      }
      catch(error){
          console.error(error.message);
          res.status(500).json({success: false, error: "Internal Server Error!"});
      }
 });

 module.exports = router;
