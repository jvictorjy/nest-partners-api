import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCoreService } from './prisma-core.service';

describe('PrismaCoreService', () => {
  let service: PrismaCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCoreService],
    }).compile();

    service = module.get<PrismaCoreService>(PrismaCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
