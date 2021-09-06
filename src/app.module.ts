import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CheckController } from './check/check.controller';
import { CheckModule } from './check/check.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://TakumiOkawara:blackbaby8_cp@cluster0.2atcp.mongodb.net/nestSample?retryWrites=true&w=majority'
    // ),
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../config.env',
    }),
    CheckModule,
    ConfigModule.forRoot({
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController, CheckController],
  providers: [AppService],
})
export class AppModule {}
