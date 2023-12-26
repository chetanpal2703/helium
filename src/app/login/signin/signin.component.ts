import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private loginservice: LoginService){

  }
  formData = {
    email: '',
    password: ''
  };

  onSubmit(loginForm: NgForm) {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    //making post request
    this.loginservice.postData(this.formData).subscribe(
      (response) => {
        console.log('Post request successful:', response);
        // Additional logic after successful post
        
      },
      (error) => {
        console.error('Post request failed:', error);
        // Handle error
      }
    );
    
  }
}
