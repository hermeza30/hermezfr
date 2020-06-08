import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
