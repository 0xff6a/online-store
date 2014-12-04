(function() {
  
  /* Helpers */
  Array.prototype.sum = function() {
    var result = 0,
        i;

    for(i = 0; i < this.length; result += this[i++])/* empty */; 

    return result;
  };

  Array.prototype.first = function() {
    return this[0];
  };

})();