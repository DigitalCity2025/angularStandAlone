import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('une requete est lancée sur ' + req.url);
  // if(!req.url.startsWith('http://localhost:5166')) {
  //   return throwError(() => 'interdit')
  // }
  

  const loaderService = inject(LoaderService);
  // afficher un loader
  loaderService.isLoading.set(true);

  return next(req).pipe(
    // ajoute un delai de 500ms
    delay(200),
    // execute une operation à la fin de l'oservable
    finalize(() => {
    // faire disparaitre le loader
      loaderService.isLoading.set(false);
  }));
};
