import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-routing-post',
  templateUrl: './routing-post.component.html',
  styleUrls: ['./routing-post.component.scss']
})
export class RoutingPostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(+params.id);
    })
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
