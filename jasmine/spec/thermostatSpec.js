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
    it('can decrease temprature', function(){
      thermostat.decreaseTemp(5);
      expect(thermostat.temprature).toEqual(15)
    });
    it('has a minimum temprature of 10', function(){
      expect(function(){
        thermostat.decreaseTemp(12);
      }).toThrow(new Error("Minimum temprature is 10"));
    });
    it('can reset temprature back to 20', function(){
      thermostat.decreaseTemp(5)
      thermostat.resetTemp()
      expect(thermostat.temprature).toEqual(20)
    });
  });

  describe('powerSave', function(){

    it('limits temprature to 25 when on', function(){
      expect(function(){
        thermostat.increaseTemp(6);
      }).toThrow(new Error("Max temp is 25 while powerSave is on"));
    });

    it('limits temprature to 32 when off', function(){
      expect(function(){
        thermostat.powerSave = 'off'
        thermostat.increaseTemp(14);
      }).toThrow(new Error("Max temp is 32 while powerSave is off"));
    });

  });
});
