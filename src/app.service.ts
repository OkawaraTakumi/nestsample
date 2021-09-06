import { Injectable } from '@nestjs/common';

//InjectableはAppService依存注入するための許可
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
