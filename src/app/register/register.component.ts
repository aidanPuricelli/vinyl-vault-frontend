import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {

    /*
    const formData = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    };
    
    const jsonFormData = JSON.stringify(formData); // json that bitch

    */

    this.userService.registerUser(this.user).subscribe(
      response => {
        const userId = response.id; // Assuming the ID is returned as 'id' in the response
        console.log(response);
        this.router.navigateByUrl('/login');
        console.log('Registration Succesful');
      },
      error => {
        console.error('Registration Failed', error);
        alert('Username or email already in use.');
      }
    );
    
  }

}
