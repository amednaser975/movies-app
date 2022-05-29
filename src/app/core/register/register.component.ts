import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, PatternValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err: string;
  registerForm: FormGroup;
  constructor(public _AuthService: AuthService, public _Router: Router) { }

  ngOnInit(): void {

    // this.registerForm = new FormGroup({
    //   'first_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    //   'last_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    //   'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)]),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    //   'confirm_password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
      
    // }, {validators: this.compareValidtor('password', 'confirm_password')})

    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
      
    })
  }

  onSubmit(formData) {
    if(this.registerForm.valid) {

      console.log(formData.value)
      this._AuthService.signUp(formData.value).subscribe(
        (data) => {
          console.log(data)
          if(data.message == 'success') {
            this._Router.navigate(['/login']);
          } else {
            this.err = 'The e-mail is already registered';
          }
        }
      )
    }
  }

  compareValidtor(control1: string, control2: string) 
  {
    return (control: AbstractControl): ValidationErrors | null => {

      const controls = control as FormGroup,
            passwordControl = controls.get(control1),
            confirmPasswordControl = controls.get(control2);
      if(passwordControl.value == confirmPasswordControl.value) {
        return null;
      } else {
        confirmPasswordControl.setErrors({notSame: 'Must be the same password'});
      }
    }
  }

}
