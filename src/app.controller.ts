import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board/board.service';
import { Board as BoardModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly boardService: BoardService) {}

  @Get('post/:id')
  async getBoardById(@Param('id') id: string): Promise<BoardModel> {
    return this.boardService.board({ id: Number(id) });
  }

  @Get('boards')
  async getAllBoards(): Promise<BoardModel[]> {
    return this.boardService.boards({
      where: { id: 1 },
    });
  }

  // @Get('filtered-posts/:searchString')
  // async boardService(
  //   @Param('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  // @Post('post')
  // async createDraft(
  //   @Body() postData: { title: string; content?: string; authorEmail: string },
  // ): Promise<PostModel> {
  //   const { title, content, authorEmail } = postData;
  //   return this.postService.createPost({
  //     title,
  //     content,
  //     author: {
  //       connect: { email: authorEmail },
  //     },
  //   });
  // }

  // @Put('publish/:id')
  // async publishPost(@Param('id') id: string): Promise<PostModel> {
  //   return this.boardService.updatePost({
  //     where: { id: Number(id) },
  //     data: { published: true },
  //   });
  // }

  // @Delete('post/:id')
  // async deletePost(@Param('id') id: string): Promise<PostModel> {
  //   return this.boardService.deletePost({ id: Number(id) });
  // }
}
