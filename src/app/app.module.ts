import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { SharedModule } from './shared/shared/shared.module';
import 'ag-grid-enterprise';

@NgModule({
    declarations: [AppComponent, LoginComponent, AlertComponent],
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
