import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  cpuProccesing(a: number, b: number) {
    this.powerService.SupplyPower('10');
    return a + b;
  }
}
