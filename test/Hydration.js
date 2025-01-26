class Hydration {
    constructor (hydrationData) {
      this.hydrationData = hydrationData;
    }
  
    returnAverageWaterIntake(userID) {
      let waterIntakeDaily = this.hydrationData[userID - 1].hydrationData.map(oz => oz.numOunces);
      let totalWaterIntake = waterIntakeDaily.reduce((total, oz) => {
        return total += oz
      }, 0);
      return totalWaterIntake / waterIntakeDaily.length;
    }
  
    returnWaterIntakeByDate(userID, date) {
      let dailyOz = this.hydrationData[userID - 1].hydrationData
      let x = dailyOz.filter(el => (JSON.stringify(el.date)) === JSON.stringify(date))
      return x.pop().numOunces
    }
  
    returnAWeekWaterIntake(userID, date) {
      let dateIndex = this.hydrationData[userID - 1].hydrationData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
      let dateBack = dateIndex - 6
      return this.hydrationData[userID - 1].hydrationData.slice(dateBack, (dateIndex + 1)).map(day => day.numOunces) 
    }
  
  }
  
  if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }