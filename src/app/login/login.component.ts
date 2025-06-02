import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservices/userservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: UserserviceService, private router: Router) { }

login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: string) => { // Changed 'any' to 'string'
        console.log('Login successful', response);
        if (response === 'Login successful') {
          this.router.navigate(['/home']);
          this.errorMessage = '';
        } else {
          console.error ('Login failed: Backend returned:', response);
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error: any) => {
        console.error('Login failed', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      },
      complete: () => {
        console.log('Login observable completed');
      }
    });
  }
}