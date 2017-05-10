function Thermostat(){
  this.temprature = 20
};

Thermostat.prototype.increaseTemp = function(temp){
  this.temprature = this.temprature + temp
};
