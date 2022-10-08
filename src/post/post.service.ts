import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/Post.dto';
import { Repository } from 'typeorm';
import { Post } from './entity/Post.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  getOne(postId: number): Promise<Post> {
    return this.postRepository.findOne({ where: { id: postId } });
  }
  getAll(): Promise<Post[]> {
    return this.postRepository.find();
  }
  create(postDto: PostDto): Promise<Post> {
    return this.postRepository.save(postDto);
  }

  async delete(postId: number): Promise<void> {
    await this.postRepository.delete(postId);
  }
}
