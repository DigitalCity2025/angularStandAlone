import { Component, computed, effect, Inject, inject, Injector, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { NavRoutes } from './types/nav-routes';
import { CommonModule } from '@angular/common';
import { ListCourseService } from './services/list-course.service';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry } from 'rxjs';
import { captureError } from 'rxjs/internal/util/errorContext';
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
  httpClient = inject(HttpClient);

  // count = 0;
  count: Signal<number>

  temp!: number;

  constructor(
    // @Inject('ressource1') ressource: number,
    // injection par constructeur
    // autreRessource: Ressource2
  ) {
    console.log(this.ressource);

    // effect(() => {
    //   this.count = this.listCourseService.list().length;
    // })

    this.count 
      = computed(() => this.listCourseService.list().length)

    ///this.autreRessource.method();
    //fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.5&lon=4.5&appid=631d8910e6e2b10be6d70baee2b38510&units=metric')
    //   .then(d => d.json())
    //   .then(d => this.temp = d.main.temp)

    this.httpClient.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: 50.5,
        lon: 4.5,
        units: 'metric',
        appid: '631d8910e6e2b10be6d70baee2b38510'
      }
    })
    // .pipe(catchError(() => of(null)))
    .subscribe({ 
      // en cas de success
      next: (d: any) => this.temp = d.main.temp,
      // en cas d'erreur
      error: () => {}
    });
  }
}
