import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const success = this.authService.register(this.username, this.password);
    if (success) {
      this.router.navigate(['/account-info']);
    } else {
      alert('Registration failed. Please try again.');
    }
  }
}
