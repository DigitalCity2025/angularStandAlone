import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlicePipe } from "../../pipes/slice.pipe";

@Component({
  selector: 'app-about',
  imports: [CommonModule, SlicePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  chaine: string = 'KHun';
  html: string = '<a href="https://www.google.be">lien vers Google</a>';
  nombre: number = 99998.5 / 3;
  date: Date = new Date();
  tableau: string[] = ['Riri', 'Fifi', 'Loulou'];
  estAdmin: boolean = false;
}
