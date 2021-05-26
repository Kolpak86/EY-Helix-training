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
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, AlertComponent, FooterComponent, LoginFormComponent],
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, PortalModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
