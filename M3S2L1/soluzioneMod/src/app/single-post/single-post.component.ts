import { Component } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostServiceService } from '../post.service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {

    posts: Post[] = [];

    constructor(
        private postSvc : PostServiceService
    ){}

    ngOnInit() {
        this.posts = this.postSvc.post
    }

}
