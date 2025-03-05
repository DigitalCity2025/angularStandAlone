import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: CardModel[] = [
    { 
      title: 'Pikachu', 
      description: 'Pokemon électrik', 
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' 
    },
    { 
      title: 'Dracaufeu', 
      description: 'Pokemon Dragon de feu', 
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' 
    },
  ]
}
