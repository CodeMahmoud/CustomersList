import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
