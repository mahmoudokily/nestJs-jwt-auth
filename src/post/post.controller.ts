import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PostDto } from './dto/Post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Get('/')
  showALlPost() {
    return this.postService.getAll();
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }
  @Post('/')
  createPost(@Body() postDto: PostDto) {
    return this.postService.create(postDto);
  }
  @Delete('/:id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.delete(id);
  }
}
