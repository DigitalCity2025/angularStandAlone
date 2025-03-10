import { Injectable, signal, Signal } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ListCourseService {

  list = signal<ArticleModel[]>([]);

  constructor() { }

  add(article: ArticleModel) {
    // modifier completement
    // list.set(/*nouvelle liste*/[])

    // mofication en fonction des anciennes valeurs
    this.list.update(old => [...old, article]);
  }

  delete(article: ArticleModel) {
    this.list.update(old => old.filter(a => a !== article));
  }

  clear() {
    this.list.set([]);
  }
}
