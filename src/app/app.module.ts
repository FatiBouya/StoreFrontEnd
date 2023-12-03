import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    ButtonModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
