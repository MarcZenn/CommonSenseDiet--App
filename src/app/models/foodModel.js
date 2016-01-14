var mongoose = require('mongoose');

// Data model for all food objects
var foodSchema = mongoose.Schema({

  name: {type: String, required: true},
  foodId: {type: String, required: true},
  foodGroup : {type: String, required: true},
  calories : {type: Number, required: true},
  servingSize : {type: String, required: true},
  totalFat : {type: Number, required: true},
  transFat : {type: Number, required: true},
  saturatedFat : {type: Number, required: true},
  cholesterol : {type: Number, required: true},
  protein : {type: Number, required: true}, 
  sodium : {type: Number, required: true},
  carbohydrate : {type: Number, required: true},
  sugar : {type: Number, required: true},
  fiber : {type: Number, required: true},
  vegetarian : {type: Boolean, required: true},
  vegan : {type: Boolean, required: true},
  glutenFree : {type: Boolean, required: true},
  nutFree : {type: Boolean, required: true},
  yesNoMaybe : {type: String, required: true},
  reasoning : {type: String, required: true},
  sourceLink : {type: String, required: true}

});

// Our user model
var Food = mongoose.model('food', foodSchema);

// Make user model available through exports/require
module.exports = Food;