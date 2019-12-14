import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { ActivityModule } from './activity/activity.module';
import { PetitionModule } from './petition/petition.module';
import { ConfigService } from './config.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule, CommunityModule, ActivityModule, PetitionModule,
    MongooseModule.forRoot('mongodb://localhost/ecosystem')
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
