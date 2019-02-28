import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Object;
  public isEditPost = false;
  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
  }
  editPost() {
    this.isEditPost = true;
    this.postsService.editSinglePost(this.post);
  }
  cancelEditPost() {
    this.isEditPost = false;
    this.postsService.cancelEditSinglePost();
  }
}
