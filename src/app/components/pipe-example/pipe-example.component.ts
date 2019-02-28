import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  public myDate = new Date();
  public togle = true;
  public mynum = 20;
  public users = [
    {
    name: 'Boris',
    age: 28
    },
    {
    name: 'Kola',
    age: 48
    },
    {
    name: 'Oleksey',
    age: 18
    },
    {
    name: 'Slavko',
    age: 38
    }
  ];
  public asycPosts;

  constructor(
    public postService: PostsService
  ) { }

  ngOnInit() {
    this.asycPosts = this.postService.getPosts();
  }
    get format() {
      return this.togle ? 'shortDate' : 'fullDate';
    }
    cangeDateFormat() {
    this.togle = !this.togle;
    }
    changeSingleObject() {
      this.users[1].age = 20;
      console.log(this.users);
    }

}
