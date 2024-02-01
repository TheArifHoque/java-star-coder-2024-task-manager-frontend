import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [
        '', 
        [
          Validators.required, 
          Validators.minLength(5),
          Validators.maxLength(25)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  login(): void {
    console.log(this.loginForm.value);
  }
}
