// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { MyServiceService } from './my-service.service';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MyPipePipe,
    AppComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MyServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true },
    MyPipePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
