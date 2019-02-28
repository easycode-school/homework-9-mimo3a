import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  post: Object;
  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.postEditObservable.subscribe((post: Object) => {
      // this.post = post;
      console.log(post);
    });
    this.postsService.postCancelEditObservable.subscribe(() => {
      console.log('EDIT CANCELED');
    });
  }
}
