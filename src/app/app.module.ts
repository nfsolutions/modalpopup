import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ConfirmComponent} from './confirm.component';


@NgModule({
  declarations: [
    AppComponent, ConfirmComponent
  ],
  imports: [
    BrowserModule, BootstrapModalModule
  ],
  exports: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
