import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesModule } from './employees/employees.module';
import { HttpClientModule } from '@angular/common/http';
// import { SearchPipe } from 'src/app/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
