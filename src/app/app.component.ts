import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideHeaderComponent } from './side-header/side-header.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchComponent } from './search/search.component';
import { Refund } from '../models/refund.model';
import { ToDO } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';

  public fullName: string = 'chandan';
  public description: string = '';
  public date: string = '';
  public isCompleted: boolean = false;
  
  public refund: Refund = {
    refundAmount: 1500,
    refundDate: '01-01-2025',
    refundStatus: false,
  };
  public todos: ToDO[] = [
    {
      description: 'Buy Groceries',
      date: '01-02-2025',
      isCompleted: false,
    },
    {
      date: '01-02-2025',
      description: 'Buy Pencil',
      isCompleted: false,
    },
    {
      description: 'Sell Old Newspaper',
      date: '01-02-2025',
      isCompleted: false,
    },
  ];

  constructor() {}

  public addIntoArray() {
    this.todos.push({
      date: this.date,
      description: this.description,
      isCompleted: this.isCompleted,
    });
  }

  public showFullName() {
    alert(this.fullName);
  }
}
