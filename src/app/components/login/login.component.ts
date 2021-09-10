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
    private usersService: UsersService
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
  }

  async onLoginSubmit() {
    try {
      const { email, password } = this.loginForm.value
      let response = await this.usersService.logIn(email, password)
      console.log(response)

    } catch (err) {
      console.log(err)
    }
  }

  async onRegisterSubmit() {
    try {
      this.registerForm.value.role_id = 25
      let response = await this.usersService.register(this.registerForm.value);
      console.log(response)
    } catch (err) {
      console.log(err)
    }

  }

}
