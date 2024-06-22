import { Global, Module } from '@nestjs/common';
import { PrismaCoreService } from '@app/core/prisma/prisma-core.service';

@Global()
@Module({
  providers: [PrismaCoreService],
  exports: [PrismaCoreService],
})
export class PrismaCoreModule {}
