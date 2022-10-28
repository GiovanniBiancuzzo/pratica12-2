import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post" >
        <button (click)="onInactivePost(post.id,i)" class="btn btn-primary" >Disattiva </button>
        <button [routerLink]="['/active-posts',post.id]" routerLinkActive="router-link-active"  class="btn btn-primary ms-3" >Dettagli </button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor(private postsSrv:PostsService) {}

  async ngOnInit() {
    const posts = await this.postsSrv.getPosts()
    this.posts = posts;
    console.log(this.posts);
  }

  onInactivePost(id:number,i:number){
    this.postsSrv.updatePost({active:false},id)
    this.posts.splice(i,1)
  }
}
