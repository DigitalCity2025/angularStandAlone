import { Component, inject } from '@angular/core';
import { ArticleModel } from '../../models/article.model';
import { FormsModule } from '@angular/forms';
import { ConfirmBoxComponent } from "../../components/confirm-box/confirm-box.component";
import { CommonModule } from '@angular/common';
import { ListCourseService } from '../../services/list-course.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule, ConfirmBoxComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  articleName: string|null = null;
  articleIsImportant: boolean = false;

  listCourseService = inject(ListCourseService);
  messageService = inject(MessageService);

  add() {
    if(!this.articleName?.trim()) {
      return;
    }
    this.listCourseService.add({
        name: this.articleName.trim(),
        isImportant: this.articleIsImportant
    }).subscribe({
      next: () => this.messageService.add({ severity: 'success', summary: 'Save OK' }),
      error: () => this.messageService.add({ severity: 'error', summary: 'Save failed' })
    })
    
    this.articleName = null;
    this.articleIsImportant = false;
  }

  delete(response: boolean, item: ArticleModel) {
    if(response) {
      this.listCourseService.delete(item);
    }
  }
}
