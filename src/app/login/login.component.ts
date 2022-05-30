import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    email:['', [Validators.email, Validators.required]],
    password:['', [Validators.required]]
  })

  submitForm() {
    console.log(this.loginForm.value)
    // this.showSuccess()
  }

  goToReg() {
    console.log("nav")
    this.route.navigate(['/register'])
  }

}


