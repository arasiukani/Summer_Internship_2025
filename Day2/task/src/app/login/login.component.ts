import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = {
    email: 'default@gmail.com',
    password: '',
  };  // it's two way data binding

  users: any[] = [];

  onSubmit() {

    this.users.push({ ...this.loginData });
    console.log(this.users);
    
    //reset local object
    this.loginData = {
      email: '',
      password: '',
    };

  }
}
