import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Water', text: 'Самая лучшая вода в мире'},
    {title: 'Bread', text: 'the best bread in the world'},
    {title: 'JS', text: 'the best language in the world'},
  ];

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  date$: Observable<Date> = new Observable( obs => {
    setInterval( () => {
      obs.next(new Date());
    }, 1000);
  })

  constructor() { }

  addPost() {
    this.posts.unshift({title: 'Angular', text: 'test text'});
  }

  ngOnInit() {
  }

}
