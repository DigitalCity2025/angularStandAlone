import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  
  // si on est connecté
  if(localStorage.getItem('TOKEN')) {
    return true;
    // autoriser (return true)
  }

  // sinon
  const router = inject(Router);
  // rediriger vers la page de login
  router.navigate(['login']);
  return false;
};
