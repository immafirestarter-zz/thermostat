function Thermostat(){
  this.temprature = 20
  this.powerSave = 'on'
};

Thermostat.prototype.increaseTemp = function(temp){
  powerCheck.apply(this, [this.powerSave, temp])
  this.temprature = this.temprature + temp
};

Thermostat.prototype.decreaseTemp = function(temp){
  minimumTempCheck.apply(this, [temp])
  this.temprature = this.temprature - temp;
};

Thermostat.prototype.resetTemp = function(){
  this.temprature = 20
};

 function powerCheck(powerSave,temp){
  if (this.temprature + temp > 25 && this.powerSave === 'on') {
   throw new Error('Max temp is 25 while powerSave is on')
 } else if (this.temprature + temp > 32 && this.powerSave ==='off'){
   throw new Error('Max temp is 32 while powerSave is off')
 };
};

function minimumTempCheck(temp){
  if (this.temprature - temp < 10) {
    throw new Error('Minimum temprature is 10')
  };
};
