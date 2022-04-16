import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './api/users/users.controller';
import { UsersService } from './api/users/users.service';
import { BooksController } from './api/books/books.controller';
import { BooksService } from './api/books/books.service';
@Module({
  imports: [],
  controllers: [AppController, UsersController,BooksController],
  providers: [AppService, UsersService,BooksService],
})
export class AppModule {}
