import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _postEditSource = new BehaviorSubject(true);
  public postEditObservable = this._postEditSource.asObservable();

  private _postCancelEditSource = new BehaviorSubject({});
  public postCancelEditObservable = this._postCancelEditSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }
  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  public editSinglePost(post) {
    this._postEditSource.next(Object.assign({}, post));
  }
  public cancelEditSinglePost() {
    this._postCancelEditSource.next(true);
  }
}
