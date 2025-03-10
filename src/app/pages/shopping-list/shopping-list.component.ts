import { Component } from '@angular/core';
import { ArticleModel } from '../../models/article.model';
import { FormsModule } from '@angular/forms';
import { ConfirmBoxComponent } from "../../components/confirm-box/confirm-box.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule, ConfirmBoxComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  articleName: string|null = null;
  articleIsImportant: boolean = false;

  list: ArticleModel[] = [];

  add() {
    if(!this.articleName?.trim()) {
      return;
    }
    this.list.push({
      name: this.articleName.trim(),
      isImportant: this.articleIsImportant
    });
    this.articleName = null;
    this.articleIsImportant = false;
  }

  delete(response: boolean, item: ArticleModel) {
    if(response) {
      this.list = this.list.filter(i => i !== item);
    }
  }
}
