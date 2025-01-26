class ActivityRepository {
    constructor (dataFilepath, userData) {
      this.dataFilepath = dataFilepath;
      this.userData = userData;
    }
    
    returnAverageStairsClimbedInADayForAllUsers(date) {
      let allClimbers = this.dataFilepath.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).map(user => user.activityData);
      let allClimberData = allClimbers.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).filter(user => user.date === date).map(user => user.flightsOfStairs);
      return allClimberData.reduce((total, steps) => {
        return total += steps
      }, 0) / allClimbers.length
    }
  
    returnAverageStepsInADayForAllUsers(date) {
      let allUsersSteps = this.dataFilepath.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).map(user => user.activityData);
      let allUsersStepsData = allUsersSteps.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).filter(user => user.date === date).map(user => user.numSteps);
      return allUsersStepsData.reduce((total, steps) => {
        return total += steps
      }, 0) / allUsersSteps.length
    }
  
    returnAverageMinsActiveInADayForAllUsers(date) {
      let allUsers = this.dataFilepath.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).map(user => user.activityData);
      let allUserData = allUsers.reduce((allUsers, eachUser) => {
        return allUsers.concat(eachUser)
      }, []).filter(user => user.date === date).map(user => user.minutesActive);
      return allUserData.reduce((total, mins) => {
        return total += mins
      }, 0) / allUsers.length
    }
  }
  
  
  if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
  }