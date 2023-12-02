import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  transform(mName: string, mManufactorer:string, mPrice: number | null): any {
    return {name: mName, manufactorer : mManufactorer, price: mPrice};
  }

}
