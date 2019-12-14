import { Module } from '@nestjs/common';
import { PetitionController } from './petition.controller';

@Module({
  controllers: [PetitionController]
})
export class PetitionModule {}
