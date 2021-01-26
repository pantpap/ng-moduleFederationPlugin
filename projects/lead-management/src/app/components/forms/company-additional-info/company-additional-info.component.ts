import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-company-additional-info',
  templateUrl: './company-additional-info.component.html',
  styleUrls: ['./company-additional-info.component.scss']
})
export class CompanyAdditionalInfoComponent implements OnInit {
  additionalInfoForm: FormGroup = this.fb.group([{
    turnover: ['', Validators.required],
    totalFunding: [''],
    ETEFunding: [''],
    totalEE: [''],
    importExportValues: [''],
    totalPayments: ['']

  }])
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
