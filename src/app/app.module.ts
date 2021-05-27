import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalModule } from '@angular/cdk/portal';
import { LoginFormModule } from './components/login/login-form/login-form.module';

@NgModule({
    declarations: [AppComponent, LoginComponent, AlertComponent, FooterComponent],
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, PortalModule, LoginFormModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
