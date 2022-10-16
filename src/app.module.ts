import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.e5eozyl.mongodb.net/test') ,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
