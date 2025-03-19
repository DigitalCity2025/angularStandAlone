import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  imports: [Button, InputText, FloatLabel, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  messageService = inject(MessageService);
  router = inject(Router);
  sessionService = inject(SessionService);

  fg = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })

  login() {
    if(this.fg.invalid) {
      return;
    }
    this.httpClient.post<{token: string}>('http://localhost:5166/api/login', this.fg.value).subscribe({
      next: ({token}) => {
        // sauver le token qq part
        this.sessionService.start(token);
        // rediriger vers une autre page
        this.router.navigate(['shop-list']);
      },
      error: () => {
        // afficher un message d'erreur
        this.messageService.add({ severity: 'error', summary: 'Impossible de vous connecter' });
      }
    })
  }
}
