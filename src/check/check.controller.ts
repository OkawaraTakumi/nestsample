import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('check')
export class CheckController {
  constructor(private configService: ConfigService) {}
  @Get()
  check() {
    const URI = this.configService.get<string>('JWT_SECRET');
    console.log(URI, 'これが環境変数');
    return this.configService.get<string>('JWT_SECRET');
  }
}
