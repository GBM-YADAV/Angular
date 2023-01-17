import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleStuComponent } from './single-stu/single-stu.component';
import { StuListComComponent } from './stu-list-com/stu-list-com.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleStuComponent,
    StuListComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
