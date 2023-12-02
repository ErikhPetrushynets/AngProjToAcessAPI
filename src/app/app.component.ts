import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { MyPipePipe } from './my-pipe.pipe';
import { ErrorMessageService } from './error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private myService: MyServiceService, private myPipePipe: MyPipePipe, private errorMessageService: ErrorMessageService) {}
  medicines: any[] = [];
  medicineName = '';
  medicineManufactorer = '';
  medicinePrice : number | null = null;
  errorMessage: string | null = null;

   addMedicine() {
    const transformedData = this.myPipePipe.transform(
      this.medicineName,
      this.medicineManufactorer,
      this.medicinePrice
    );
    this.sendData(transformedData);
    this.medicineName = '';
    this.medicineManufactorer = '';
    this.medicinePrice = null;
    this.myService.getData()
  }

  ngOnInit(): void {
    this.errorMessageService.errorMessage$.subscribe((message) => {
      this.errorMessage = message;});
    this.myService.getData().subscribe((data: any[]) => {
      this.medicines = data;
      console.log(this.medicines);
    });
  }

  sendData(data:any): void {
    this.errorMessage = null;
    this.myService.postData(data).subscribe(response => {
      this.myService.getData().subscribe((data: any[]) => {
        this.medicines = data;
        console.log(this.medicines);
      });
    });
  }
}