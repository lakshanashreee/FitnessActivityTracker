class User {
    constructor(userData) {
      this.userData = userData;
    } 
  
    returnFirstName() {
      let firstName = this.userData.name.split(' ');
      return firstName[0];
    }
  
    returnUserAdress() {
      let userAddress = this.userData.address;
      return userAddress;
    }
   
    returnUserEmailAdress() {
      let userEmailAddress = this.userData.email;
      return userEmailAddress;
    }
  
  }
  if (typeof module !== 'undefined') {
    module.exports = User;
  }