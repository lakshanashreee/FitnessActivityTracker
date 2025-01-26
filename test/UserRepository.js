class UserRepository {
    constructor(dataFilepath) {
      this.dataFilepath = dataFilepath;
      // this.currentUser = new User(this.returnUserData(userID))
    }
  
  
    returnUserData(userID) {
      let user = this.dataFilepath.find((user) => {
        return user.id === userID;
      })
      return user;
    }
  
    returnAverageStepGoal() {
      let average = this.dataFilepath.reduce((total, user) => {
        return total += user.dailyStepGoal / this.dataFilepath.length;
      }, 0)
      return average;
    }
  
    returnAverageStrideLength() {
      let average = this.dataFilepath.reduce((total, user) => {
        return total += user.strideLength / this.dataFilepath.length;
      }, 0)
      return Number(average.toFixed(1));
    }
  
    returnAllUsersAddresses() {
      let allAddresses = this.dataFilepath.map((user) => {
        return user.address;
      });
      return allAddresses;
    }
  
    returnAllStates() {
      let justStates = this.returnAllUsersAddresses()
      return justStates.map((address) => {
        return address.split(' ').filter((word) => word.length === 2).join('');
      })
    }
  
    returnMostFrequentState() {
      let mostCommonState = this.returnAllStates();
      return mostCommonState.sort((a, b) => mostCommonState.filter(state => state === a).length - mostCommonState.filter(state => state === b).length).pop();
    }
  
    compareStepCounts() {
      if (user.userData.dailyStepGoal === this.returnAverageStepGoal()) {
        return "equal to";
      } else if (user.userData.dailyStepGoal > this.returnAverageStepGoal()) {
        return "greater than"
      } else {
        return "less than"
      }
    }
  }
  
  if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }