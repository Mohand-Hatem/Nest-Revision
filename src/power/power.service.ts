import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  SupplyPower(Watt: string) {
    console.log(`You need Power of ${Watt} To Run`);
  }
}
