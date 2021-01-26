import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-officer-data',
  templateUrl: './contract-officer-data.component.html',
  styleUrls: ['./contract-officer-data.component.scss']
})
export class ContractOfficerDataComponent {
  contractOfficerForm = this.fb.group({
    customerCode: [null, Validators.required],
    fullName: ['', Validators.required],
    phone: [null, Validators.required],
    capacity: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
  constructor(private fb: FormBuilder) {}

  getControl(name: string): AbstractControl | null {
    return this.contractOfficerForm.get(name);
  }

  isValidField(field: string): boolean {
    const control = this.getControl(field);
    return Boolean(control && control.invalid && (control.dirty || control.touched));
  }

  get email(): AbstractControl | null {
    return this.getControl('email');
  }

  get isValidEmail(): boolean {
    return this.isValidField('email');
  }

  get emailErrorMessage(): string {
    return this.email?.errors?.required ? 'Το Email είναι υποχρεωτικό' : this.email?.errors?.email ? 'Λάθος Email' : '';
  }
}
