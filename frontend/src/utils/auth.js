// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage (sets token in localStorage to keep user logged in on page refresh)
   // return the user to the homepage
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();
