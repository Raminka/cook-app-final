
myApp.factory('sampleFactory', function() {

  var sampleFunction=function() {

    console.log('hello, I am sampleFunction!');
    // any code here
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };


  }

  return {
    sampleFunction : sampleFunction
  };

});



/*



myApp.controller('ReviewController', function() {
  this.review = {};

  this.addReview = function(product) {
    product.reviews.push(this.review);

    this.review = {};
  };
});







*/
