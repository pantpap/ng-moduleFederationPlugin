import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-user-data',
  templateUrl: './applicant-user-data.component.html',
  styleUrls: ['./applicant-user-data.component.scss']
})
export class ApplicantUserDataComponent {
  applicantDataForm: FormGroup = this.fb.group([
    {
      customerCode: [''],
      companyName: ['', Validators.required],
      legalForm: ['', Validators.required],
      afm: ['', Validators.required],
      workspace: ['', Validators.required],
      representative: ['', Validators.required],
      teamCode: ['', Validators.required],
      groupCode: ['', Validators.required],
      groupName: ['', Validators.required],
      customerType: ['', Validators.required],
      relationManager: ['', Validators.required]
    }
  ]);
  dataSource: any;
  constructor(private fb: FormBuilder) {}

  onChange($event: any) {

  }
}
