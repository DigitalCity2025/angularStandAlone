import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from "../../components/form-error/form-error.component";

@Component({
  selector: 'app-movie-edit',
  imports: [CommonModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.scss'
})
export class MovieEditComponent {
  formBuilder = inject(FormBuilder);

  directorForm = this.formBuilder.group({
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]]
  }, { validators: [] })

  form = this.formBuilder.group({
    title: [null, [Validators.required, Validators.maxLength(100)]],
    director: this.directorForm,
    duration: [null, [Validators.min(1), Validators.max(999999)]],
    actors: this.formBuilder.array([], { validators: [Validators.minLength(1)] }),
    categories: this.formBuilder.array([], { validators: [
      control => (control.value.length < 1 || control.value.every((v: any) => 
          !v)) ? { minlength: true } : null
    ] }),
  })

  constructor() {
    // console.log(this.form.value)
    // console.log(this.form.controls['title'].errors)
  }

  addActor() {
    (this.form.controls['actors'] as FormArray)
      .push(this.formBuilder.group({
        lastName: [null, [Validators.required]],
        firstName: [null, [Validators.required]]
      }))
  }

  addCategory() {
    this.form.controls['categories']
      .push(this.formBuilder.control(null, [Validators.required]))
  }

  removeCategory(i: number) {
    this.form.controls['categories'].removeAt(i)
  }

  removeActor(i : number) {
    this.form.controls['actors'].removeAt(i)
  }
}
