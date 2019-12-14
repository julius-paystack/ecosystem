import { Controller, Post, Body } from '@nestjs/common';
import { UserSignupDto } from './dto/user-signup.dto';

@Controller('user')
export class UserController {
	@Post('signup')
	signup(@Body() body: UserSignupDto) {
		
	}
}
