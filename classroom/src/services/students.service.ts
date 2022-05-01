import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  async getStudentByAuthUserId(authUserId: string) {
    const student = await this.prisma.student.findUnique({
      where: { authUserId },
    });
    console.log(authUserId);

    console.log(student);

    return student;
  }

  getStudentById(id: string) {
    return this.prisma.student.findUnique({ where: { id } });
  }
}
