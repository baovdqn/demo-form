import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.controls['phone'].errors);
    this.validateForm.markAllAsTouched();
    if (this.validateForm.invalid) {
      alert('Vui lòng nhập đủ trường');
      return;
    } else {
      // alert(this.validateForm.value);
      console.log(this.validateForm.value);
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phone: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
  }
}
