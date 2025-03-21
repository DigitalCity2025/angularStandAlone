import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Calendar } from 'primeng/calendar';
import { Button } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from "../../components/form-error/form-error.component";
import { Patterns } from '../../constants/patterns';
import { CustomValidators } from '../../validators/custom.validators';

@Component({
  selector: 'app-person-edit',
  imports: [CommonModule, ReactiveFormsModule, FloatLabel, InputText, Calendar, Button, Fieldset, FormErrorComponent],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.scss'
})
export class PersonEditComponent {

  fb = inject(FormBuilder);

  phonesFormArray: FormArray = this.fb.array([], { validators: [CustomValidators.listLength(1,5)] });

  addressForm = this.fb.group({
    street: [null, [Validators.required, Validators.maxLength(255)]],
    number: [null, [Validators.required]],
    zipCode: [null, [Validators.required, Validators.pattern(Patterns.ZIP_CODE)]],
    city: [null, [Validators.required]]
  })

  form = this.fb.group({
    lastName: [null, [Validators.required, Validators.maxLength(50)]],
    firstName: [null, [Validators.required, Validators.maxLength(50)]],
    address: this.addressForm,
    email: [null, [Validators.required, Validators.maxLength(255), Validators.email]],
    birthDate: [null, [Validators.required, CustomValidators.notBeforeToday]],
    phones: this.phonesFormArray
  })

  addPhone() {
    this.phonesFormArray.push(this.fb.group({
      type: [null, [Validators.required]],
      number: [null, [Validators.required]]
    }))
    this.phonesFormArray.markAsTouched();
  }

  removePhone(i: number) {
    this.phonesFormArray.removeAt(i);
  }
}
