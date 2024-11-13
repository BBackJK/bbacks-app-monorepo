import { Controller, Get } from '@nestjs/common';

import { ResponseMessage } from '@common/dto/response.message.dto';

@Controller('auth')
export class AuthController {
  @Get()
  test(): ResponseMessage {
    return ResponseMessage.ok();
  }
}
