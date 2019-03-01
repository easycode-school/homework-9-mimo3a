import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FormComponent } from './components/form/form.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { MultiplyTenPipe } from './pipes/multiply-ten.pipe';
import { SortByAgePipe } from './pipes/sort-by-age.pipe';
import { SortByAgeLinePipe } from './pipes/sort-by-age-line.pipe';
import { TimeSetPipe } from './pipes/time-set.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
    PipeExampleComponent,
    MultiplyTenPipe,
    SortByAgePipe,
    SortByAgeLinePipe,
    TimeSetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
