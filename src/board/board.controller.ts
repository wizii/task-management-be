import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  //   @Post()
  //   create(@Body() createBoard: CreateBoard) {
  //     return this.boardService.create(createBoard);
  //   }

  @Get()
  findAll() {
    console.log(this.boardService.boards({}));
    return this.boardService.boards({});
  }
}
