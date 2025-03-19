import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.scss'
})
export class MovieEditComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: [null, [Validators.required, Validators.maxLength(100)]],
    director: this.formBuilder.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]]
    }, { validators: [] }),
    duration: [null, [Validators.min(1), Validators.max(999999)]],
    actors: this.formBuilder.array([], { validators: [Validators.minLength(1)] }),
    categories: this.formBuilder.array([], { validators: [Validators.minLength(1)] }),
  })

  constructor() {
    // console.log(this.form.value)
    // console.log(this.form.controls['title'].errors)
  }

  addActor() {

  }

  addCategory() {
    this.form.controls['categories']
      .push(this.formBuilder.control(null, [Validators.required]))
  }
}
