import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginData: any;
  errorMsg: string = '';
  constructor( private route:Router, private loginservice: LoginService, private authService: AuthService){

  }
  formData = {
    email: '',
    password: ''
  };

  onSubmit(loginForm: NgForm) {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    //making post request
    this.authService.login(this.formData.email, this.formData.password).subscribe(
      (response) => {
        //console.log('Post request successful:', response);
        this.loginData = response.data;
        console.log(this.loginData.access_token);
        if(response.status){
          debugger
          this.route.navigateByUrl('/user');

          // this.loginservice.getUserList(1, 2, 'admin').subscribe(
          //   (response) => {
          //     console.log(response);
          //   },
          //   (error) => {
          //     console.error(error);
          //   }
          // );
        }else{
          this.errorMsg = 'please provide correct cred!!';
          alert(this.errorMsg);
        }
      },
      (error) => {
        console.error('Post request failed:', error);
        // Handle error
      }
    );
  }
}
