import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Object[] = [];
  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit()  {
    this.postsService.getPosts().subscribe((posts: object[]) => {
      this.posts = posts;
      console.log(this.posts);
    });
    }
  }

