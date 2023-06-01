import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  resetPassswordForm2!: FormGroup;
  formSubmitted: boolean = false;
  successMessage: string = "";


  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPassswordForm2 = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
 * convenience getter for easy access to form fields
 */
  get formValues() {
    return this.resetPassswordForm2.controls;
  }


  /**
   * On form submit
   */
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.resetPassswordForm2.valid) {
      this.successMessage = "We have sent you an email containing a link to reset your password";
    }
  }


}
