class SleepRepository {
    constructor(dataFilepath) {
      this.dataFilepath = dataFilepath;
    }
  
    averageSleepQualityAllUsers() {
      let allSleepUsers = this.dataFilepath.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []);
      let userSleepData = allSleepUsers.map(user => user.sleepData);
      let allData = userSleepData.reduce((allData, eachUser) => {
        return allData.concat(eachUser)
      }, []);
      let allSleepQuality = allData.reduce((allSleepQuality, user) => {
        allSleepQuality += user.sleepQuality;
        return allSleepQuality;
      }, 0); 
      return allSleepQuality / allData.length;
    }
  
    returnWeekSleepQualityAllUsers(date) {
      let allData = this.dataFilepath.filter(allUsers => {
        let spreadedAllData = Object.entries(allUsers);
        let allUserSleepData = spreadedAllData[1][1];
        let sevenDays = allUserSleepData.slice((allUserSleepData.findIndex(day => day.date === date) - 6), 7).reduce((total, dailySleep) => total += dailySleep.sleepQuality, 0) / 7;
        if (sevenDays > 3) {
          return allUsers
        }
      })
      return allData.map(user => user.userID);
    }
  
    returnLongestDailySleeper(date) {
      let topSleepUsers = this.dataFilepath.map(element => {
        let m = element.sleepData.filter(el => el.date === date).pop()
        let r = [];
        r.push(m.hoursSlept)
        r.unshift(element.userID)
        return r
      })
      let topSleepLengths = topSleepUsers.reduce((total, el) => {
        total.push(el)
        return total
      }, [])
      let sortedTopSleepLengths = topSleepLengths.sort((a, b)=> a[1] - b[1])
      let index = sortedTopSleepLengths.length - 1
      let bestSleep = sortedTopSleepLengths[index]
      let bestSleepers = sortedTopSleepLengths.filter(el => el === bestSleep)
      return bestSleepers.map(sleeper => sleeper[0])
    }
  
    returnShortestDailySleeper(date) {
      let worstSleepUsers = this.dataFilepath.map(element => {
        let m = element.sleepData.filter(el => el.date === date).pop()
        let r = [];
        r.push(m.hoursSlept)
        r.unshift(element.userID)
        return r
      })
      let leastSleepLengths = worstSleepUsers.reduce((total, el) => {
        total.push(el)
        return total
      }, [])
      let sortedLeastSleepLengths = leastSleepLengths.sort((a, b)=> b[1] - a[1])
      let index = sortedLeastSleepLengths.length - 1
      let worstSleep = sortedLeastSleepLengths[index]
      let worstSleepers = sortedLeastSleepLengths.filter(el => el === worstSleep)
      return worstSleepers.map(sleeper => sleeper[0])
    }
  }  
  
  
  
  if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
  }