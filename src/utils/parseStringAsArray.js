module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.toString().split(',').map(tech => tech.trim());
  }
