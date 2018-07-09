import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class Registration {
  userName = '';
  password = '';

  loginUser() {
    console.log(this.userName);
  }

  register() {
    console.log('user registration');
  }
}
