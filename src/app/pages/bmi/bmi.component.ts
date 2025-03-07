import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.scss'
})
export class BmiComponent {
  taille: number = 0;
  poids: number = 0; 

  get bmi() {
    return this.poids / (this.taille/100)**2;
  }
}
