import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to learn angular', text: 'I am learning angular', id: 1},
    {title: 'Ha ha ha', text: 'I always ha ha when I don`t now', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id);
  }

}
