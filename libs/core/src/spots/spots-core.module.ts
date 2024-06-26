import { Module } from '@nestjs/common';
import { SpotsCoreService } from '@app/core/spots/spots-core.service';

@Module({
  providers: [SpotsCoreService],
})
export class SpotsCoreModule {}
