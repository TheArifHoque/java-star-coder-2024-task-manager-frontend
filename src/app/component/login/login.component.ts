import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
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
    if (this.loginForm.valid) {
      this.apiService
      .login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
