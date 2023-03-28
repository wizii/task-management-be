import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Board, Column, Task, Prisma } from '@prisma/client';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async boards(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BoardWhereUniqueInput;
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput;
  }): Promise<Board[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.board.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async columns(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ColumnWhereUniqueInput;
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput;
  }): Promise<Column[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.column.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async tasks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaskWhereUniqueInput;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBoard(data: Prisma.BoardCreateInput): Promise<Board> {
    return this.prisma.board.create({
      data,
    });
  }

  async deleteBoard(id: string): Promise<Board> {
    return this.prisma.board.delete({
      where: { id: +id },
    });
  }

  async createTask(data): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async deleteTask(id: string): Promise<Task> {
    return this.prisma.task.delete({
      where: { id: +id },
    });
  }

  async deleteTasks(data): Promise<Task> {
    // @ts-ignore
    return this.prisma.task.deleteMany({
      // @ts-ignore
      where: { bord: data.board },
    });
  }

  async deleteColumns(data): Promise<Column> {
    // @ts-ignore
    return this.prisma.column.deleteMany({
      // @ts-ignore
      where: { bord: data.board },
    });
  }

  async createColumn(data): Promise<Column> {
    return this.prisma.column.create({
      data,
    });
  }

  async createColumns(data): Promise<Column> {
    // @ts-ignore
    return this.prisma.column.createMany({
      data,
    });
  }

  async createTasks(data): Promise<Task> {
    // @ts-ignore
    return this.prisma.task.createMany({
      data,
    });
  }
}
