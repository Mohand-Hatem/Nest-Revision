import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getDiskData(data: string) {
    this.powerService.SupplyPower('25');
    return data;
  }
}
