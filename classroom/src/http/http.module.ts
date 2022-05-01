import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { CoursesResolver } from '../graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from '../graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from '../graphql/resolvers/student.resolver';
import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      plugins: [],
    }),
  ],
  providers: [
    // RESOLVERS
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,
    // SERVICES
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
