// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Method to check if the user is logged in
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Method to simulate user login
  login(username: string, password: string) {
    // Simulate API call for authentication
    if (username === 'user' && password === 'password') {
      this.loggedIn.next(true);
      return true; // Success
    }
    return false; // Invalid credentials
  }

  // Method to simulate user registration
  register(username: string, password: string) {
    // Simulate API call for registration
    // Add your actual registration logic here
    return true; // Success
  }

  // Method to simulate fetching user account information
  getAccountInfo() {
    // Simulate API call to get user account information
    // Add your actual logic to fetch account information here
    return { username: 'user' }; // Replace with actual data
  }

  // Method to simulate user logout
  logout() {
    this.loggedIn.next(false);
  }
}
