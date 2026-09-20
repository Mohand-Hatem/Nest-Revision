import { Controller, Get } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}

  @Get()
  run() {
    return [
      this.diskService.getDiskData('Hello'),
      this.cpuService.cpuProccesing(7, 8),
    ];
  }
}
