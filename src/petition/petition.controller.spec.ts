import { Test, TestingModule } from '@nestjs/testing';
import { PetitionController } from './petition.controller';

describe('Petition Controller', () => {
  let controller: PetitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetitionController],
    }).compile();

    controller = module.get<PetitionController>(PetitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
