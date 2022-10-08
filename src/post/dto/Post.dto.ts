import { IsString, IsDate } from 'class-validator';

export class PostDto {
  @IsString()
  body: string;

  @IsString()
  title: string;
}
