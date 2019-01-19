const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const {ensureAuthenticated} = require('../helpers/auth');
require("../models/Book");
const books = mongoose.model("books");


  // the index route
  router.get("/", ensureAuthenticated, (req, res)=>{
    books.find()
      .then(books =>{
        res.render("index",{books:books})
      });

});


router.get("/details", ensureAuthenticated, (req, res)=>{
  res.render("details")
});



router.get("/shopping", (req, res)=>{
  var cart = req.session.cart;
  displayCart = {items:[], total:0}
  total = 0; 

  for (const item in cart) {
      displayCart.items.push(cart[item]);
      total += (cart[item] * cart[item].price)
  }
  displayCart.total = total;
  res.render("cart/shopping-cart", {
      cart: displayCart
  })

});

router.post('/shopping/:id', function(req, res){
  req.session.cart = req.session.cart || {};
  var cart = req.session.cart;

  books.findOne({_id:req.params.id}, function(err, book){
    if(err){
      console.log(err);
    }

    if(cart[req.params.id]){
      cart[req.params.id].qty++
    } else {
      cart[req.params.id] = {
        item: book._id,
        title: book.name,
        price: book.price,
      }
    }

    res.redirect('/shopping');
  });
});


module.exports = router;