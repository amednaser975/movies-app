import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  err: string;
  constructor(public _AuthService: AuthService, public _Router: Router) { 

    
    
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
    })
  }
  onLogIn(formData) {
    
    this._AuthService.signIn(formData.value).subscribe(

      (data) => {
        if(data.message == 'success') {

          this._AuthService.saveData(data.user, data.token);
          this._Router.navigate(['/home']);

        } else {
          this.err = 'Email or Password is wrong';
        }
      }
    )
  }

}
