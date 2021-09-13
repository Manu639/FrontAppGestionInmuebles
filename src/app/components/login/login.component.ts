import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  registerForm: FormGroup
  hide: boolean;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.hide = true

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })

    this.registerForm = new FormGroup({
      name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      repeat_password: new FormControl(''),
      tax_address: new FormControl('')
    })
  }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.params.token) {
      localStorage.setItem('authorization', this.activatedRoute.snapshot.params.token)
      this.router.navigate(['/app', 'dashboard'])
    }

  }

  async onLoginSubmit() {
    try {
      const { email, password } = this.loginForm.value
      let response = await this.usersService.logIn(email, password)
      localStorage.setItem('authorization', response.data.token)
      this.router.navigate(['/app', 'dashboard'])
    } catch (err) {
    }
  }

  async onRegisterSubmit() {
    try {
      this.registerForm.value.role_id = 25
      let response = await this.usersService.register(this.registerForm.value);
      localStorage.setItem('authorization', response.data.token)
      this.router.navigate(['/app', 'dashboard'])

    } catch (err) {
    }

  }

}
