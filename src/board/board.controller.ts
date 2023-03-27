import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import {
  Board as BoardModel,
  Column as ColumnModel,
  Task as TaskModel,
} from '@prisma/client';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // @Get('board/:id')
  // async getBoardById(@Param('id') id: string): Promise<BoardModel> {
  //   return this.boardService.board({ id: Number(id) });
  // }

  @Get()
  async getAllBoards(): Promise<BoardModel[]> {
    return this.boardService.boards({});
  }

  // TODO: accept param for column id
  @Get('board/:id/columns')
  async getColumns(@Param('id') id: string): Promise<ColumnModel[]> {
    return this.boardService.columns({
      where: { board: +id },
    });
  }

  @Get('board/:id/tasks')
  async getTasks(@Param('id') id: string): Promise<TaskModel[]> {
    console.log(id);
    return this.boardService.tasks({
      where: { board: +id },
    });
  }

  @Post('/board')
  async createBoard(@Body() data) {
    const boardData = {
      name: data.name,
    };
    return this.boardService.createBoard(boardData);
  }

  @Post('/task')
  async createTask(@Body() data) {
    const { name, column, description, CRUDFlag, id, board } = data;

    const taskData = {
      name,
      column,
      description,
      id,
      board,
    };
    return this.boardService.createOrDeleteTask(CRUDFlag, taskData);
  }

  @Post('/columns')
  async createColumns(@Body() data) {
    console.log('create cols data', data);
    return this.boardService.createColumns(data);
  }

  @Post('/column')
  async createColumn(@Body() data) {
    console.log(data);
    return this.boardService.createColumn(data);
  }
}
