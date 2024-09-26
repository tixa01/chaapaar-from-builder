import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import data from '../form-config/config.json';
import {MatInputModule} from '@angular/material/input'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
    
  ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {

  form!: FormGroup;
  formConfig = data;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    console.log(data);
    
    this.buildForm();
  }

  buildForm() {
    const formGroupConfig :any ={};

    this.formConfig.form.fields.forEach(field => {
      const validators = [];

      if (field.required) {
        validators.push(Validators.required);
      }
      else(
        validators.push(false)
      )
      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }
      if (field.maxLength) {
        validators.push(Validators.maxLength(field.maxLength));
      }
      if (field.regex) {
        validators.push(Validators.pattern(field.regex));
      }

      formGroupConfig[field.name] = ['', validators];
    });

    this.form = this.fb.group(formGroupConfig);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
