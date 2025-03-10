import { Component, Inject, inject, Injector } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { NavRoutes } from './types/nav-routes';
import { CommonModule } from '@angular/common';
import { ListCourseService } from './services/list-course.service';
// import { Ressource2 } from './app.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navRoutes: NavRoutes = routes;

  // injection par propriétés
  // autreRessource = inject(Ressource2);
  ressource = inject(Injector).get('ressource1');
  listCourseService = inject(ListCourseService);

  constructor(
    // @Inject('ressource1') ressource: number,
    // injection par constructeur
    // autreRessource: Ressource2
  ) {
    console.log(this.ressource);
    ///this.autreRessource.method();
  }
}
