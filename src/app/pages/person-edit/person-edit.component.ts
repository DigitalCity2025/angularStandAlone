import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Calendar } from 'primeng/calendar';
import { Button } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from "../../components/form-error/form-error.component";

@Component({
  selector: 'app-person-edit',
  imports: [CommonModule, ReactiveFormsModule, FloatLabel, InputText, Calendar, Button, Fieldset, FormErrorComponent],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.scss'
})
export class PersonEditComponent {

  fb = inject(FormBuilder);

  phonesFormArray: FormArray = this.fb.array([]);

  addressForm = this.fb.group({
    street: [],
    number: [],
    zipCode: [],
    city: []
  })

  form = this.fb.group({
    lastName: [],
    firstName: [],
    address: this.addressForm,
    email: [],
    birthDate: [],
    phones: this.phonesFormArray
  })

  addPhone() {
    this.phonesFormArray.push(this.fb.group({
      type: [],
      number: []
    }))
  }

  removePhone(i: number) {
    this.phonesFormArray.removeAt(i);
  }
}
