describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temprature', function(){
    it('thermostat starts at 20 degrees', function(){
      expect(thermostat.temprature).toEqual(20)
    });
    it('can increase temprature', function(){
       thermostat.increaseTemp(5);
         expect(thermostat.temprature).toEqual(25); 
    });
  });
});
