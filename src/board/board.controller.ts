import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import {
  Board as BoardModel,
  Column as ColumnModel,
  Task as TaskModel,
} from '@prisma/client';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async getAllBoards(): Promise<BoardModel[]> {
    return this.boardService.boards({});
  }

  @Get('board/:id/columns')
  async getColumns(@Param('id') id: string): Promise<ColumnModel[]> {
    return this.boardService.columns({
      where: { board: +id },
    });
  }

  @Get('board/:id/tasks')
  async getTasks(@Param('id') id: string): Promise<TaskModel[]> {
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
    const { name, column, description, id, board } = data;

    const taskData = {
      name,
      column,
      description,
      id,
      board,
    };
    return this.boardService.createTask(taskData);
  }

  @Delete('/task/:id')
  async deleteTask(@Param('id') id: string) {
    return this.boardService.deleteTask(id);
  }

  @Delete('/board/:id')
  async deleteBoard(@Param('id') id: string) {
    return this.boardService.deleteBoard(id);
  }

  @Delete('/tasks')
  async deleteTasks(@Body() data) {
    return this.boardService.deleteTasks(data);
  }

  @Delete('/columns')
  async deleteColumns(@Body() data) {
    return this.boardService.deleteColumns(data);
  }

  @Post('/columns')
  async createColumns(@Body() data) {
    return this.boardService.createColumns(data);
  }

  @Post('/column')
  async createColumn(@Body() data) {
    return this.boardService.createColumn(data);
  }

  @Post('/tasks')
  async createTasks(@Body() data) {
    return this.boardService.createTasks(data);
  }
}
