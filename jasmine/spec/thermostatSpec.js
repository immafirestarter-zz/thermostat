describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temprature', function(){
    it('thermostat starts at 20 degrees', function(){
      expect(thermostat.temprature).toEqual(20)
    });
  });
});
