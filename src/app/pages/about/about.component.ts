import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  chaine: string = 'KHun';
  html: string = '<a href="www.google.be">lien vers Google</a>';
  nombre: number = 99998.5 / 3;
  date: Date = new Date();
  tableau: string[] = ['Riri', 'Fifi', 'Loulou'];
  estAdmin: boolean = false;
}
