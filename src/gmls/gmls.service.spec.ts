import { Test, TestingModule } from '@nestjs/testing';
import { GmlsService } from './gmls.service';

describe('GmlsService', () => {
  let service: GmlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GmlsService],
    }).compile();

    service = module.get<GmlsService>(GmlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
