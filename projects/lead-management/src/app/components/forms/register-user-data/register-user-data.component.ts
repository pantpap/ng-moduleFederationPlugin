import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user-data',
  templateUrl: './register-user-data.component.html',
  styleUrls: ['./register-user-data.component.scss']
})
export class RegisterUserDataComponent implements OnInit {
  userDataForm: FormGroup = this.fb.group({
    fullName: [''],
    unitCode: [''],
    registryNo: [''],
    phoneNo: [''],
    mobileNo: [''],
    email: ['', Validators.email]
  });
  dataSource: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userDataForm.disable();
  }

  onChange(event: any) {
    console.log(event);
  }

}
