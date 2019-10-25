import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  posts: Post[] = [
    {title: 'I want to learn angular', text: 'I am learning angular', id: 1},
    {title: 'Ha ha ha', text: 'I always ha ha when I don`t now', id: 2}
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('timeout');
      this.posts[0] = {
        title: 'changed',
        text: 'text2',
        id: 2
      };
    }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id);
  }
}
