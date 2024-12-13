import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  public findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  public findOne(@Param() params: any): Promise<Post> {
    return this.postService.findOne(params.id);
  }
}
