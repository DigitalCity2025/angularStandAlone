import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Patterns } from '../../constants/patterns';

@Component({
  selector: 'app-form-error',
  imports: [CommonModule],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent {
  control = input.required<AbstractControl>(); 

  Patterns = Patterns
}
