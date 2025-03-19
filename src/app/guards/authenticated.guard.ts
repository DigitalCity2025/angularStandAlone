import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  
  // si on est connecté
  if(inject(SessionService).session().isAuthenticated) {
    return true;
    // autoriser (return true)
  }

  // sinon
  const router = inject(Router);
  // rediriger vers la page de login
  router.navigate(['login']);
  return false;
};
