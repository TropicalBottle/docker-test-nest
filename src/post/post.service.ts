import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { postsMock } from './postMock';

@Injectable()
export class PostService {
  posts: Post[] = postsMock;

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: string): Post {
    return this.posts.find((post: Post) => post.id === Number(id));
  }
}
