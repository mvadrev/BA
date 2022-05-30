import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength]],
    lastName:[''],
    email:['', [Validators.email, Validators.required]],
    password:['', [Validators.required]],
    acceptTerms: ['',[Validators.required] ]
  })

  submitForm() {
    console.log(this.registerForm.value)
    this.showSuccess()
  }

  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message'});
  }

}
