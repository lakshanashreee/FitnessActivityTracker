class Sleep {
    constructor(sleepData) {
      this.sleepData = sleepData;
    } 
    returnAverageSleep(userID) {
      let sleepHoursDaily = this.sleepData[userID - 1].sleepData.map(day => day.hoursSlept);
      let totalSleep = sleepHoursDaily.reduce((total, hour) => {
        return total += hour
      }, 0);
      return Math.floor(totalSleep / sleepHoursDaily.length);
    }
  
    returnAverageSleepQuality(userID) {
      let sleepQualityDaily = this.sleepData[userID - 1].sleepData.map(day => day.sleepQuality);
      let totalSleepQuality = sleepQualityDaily.reduce((total, quality) => {
        return total += quality
      }, 0);
      return Math.floor(totalSleepQuality / sleepQualityDaily.length);
    }
  
    returnTotalSleepHoursInSpecificDay(userID, date) {
      let dailyHoursSlept = this.sleepData[userID - 1].sleepData
      let x = dailyHoursSlept.filter(el => (JSON.stringify(el.date)) === JSON.stringify(date))
      return x.pop().hoursSlept;
    }
  
    returnTotalSleepQualityInSpecificDay(userID, date) {
      let dailySleepQuality = this.sleepData[userID - 1].sleepData
      let x = dailySleepQuality.filter(el => (JSON.stringify(el.date)) === JSON.stringify(date))
      return x.pop().sleepQuality;
    }
  
    returnAWeekSleepCount(userID, date) {
      let dateIndex = this.sleepData[userID - 1].sleepData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
      let dateBack = dateIndex - 6
      return this.sleepData[userID - 1].sleepData.slice(dateBack, (dateIndex + 1)).map(day => day.hoursSlept) 
    }
  
    returnAWeekSleepQualityCount(userID, date) {
      let dateIndex = this.sleepData[userID - 1].sleepData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
      let dateBack = dateIndex - 6
      return this.sleepData[userID - 1].sleepData.slice(dateBack, (dateIndex + 1)).map(day => day.sleepQuality) 
    }
  
  }
  if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }