import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Board, Column, Task, Prisma } from '@prisma/client';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async board(
    boardWhereUniqueInput: Prisma.BoardWhereUniqueInput,
  ): Promise<Board | null> {
    return this.prisma.board.findUnique({
      where: boardWhereUniqueInput,
    });
  }

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

  async updateBoard(params: {
    where: Prisma.BoardWhereUniqueInput;
    data: Prisma.BoardUpdateInput;
  }): Promise<Board> {
    const { where, data } = params;
    return this.prisma.board.update({
      data,
      where,
    });
  }

  async deleteBoard(where: Prisma.BoardWhereUniqueInput): Promise<Board> {
    return this.prisma.board.delete({
      where,
    });
  }

  async createOrDeleteTask(CRUDFlag, data): Promise<Task> {
    if (CRUDFlag === 'C') {
      return this.prisma.task.create({
        data,
      });
    }
    if (CRUDFlag === 'D') {
      return this.prisma.task.delete({
        where: { id: data.id },
      });
    }
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
}
