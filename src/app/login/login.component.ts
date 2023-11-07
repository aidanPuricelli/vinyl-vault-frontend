import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Authservice } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any = {};

  constructor(private userService: UserService, private router: Router) {}

  public login(): void {

    this.userService.loginUser(this.user).subscribe(
      response => {
        console.log(response);
        if (response < 1000) {
          sessionStorage.setItem('userId', response);
          this.router.navigateByUrl('/home');                   /* writing comments for future me is fun... look at all that whitespace you'll have to delete */                 
          console.log('Login Successful');
        } else {
          console.log('Login Failed');
          alert('Incorrect email or password.');
        }
      },
      error => {
        console.error('Login Failed', error);
        alert('Incorrect email or password.')
      }

    );
  }

}
