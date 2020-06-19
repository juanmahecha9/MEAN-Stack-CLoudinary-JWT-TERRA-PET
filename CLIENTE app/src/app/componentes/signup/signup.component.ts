import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = {
    ocupation: '',
    income: '',
    pet: '',
    password: '',
    email: '',
    adress: '',
    phone: '',
    name:''
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signUp() {
    this.authService.signUpUser(this.user).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private']);
      },
      (err) => console.log(err)
    );
  }
}
