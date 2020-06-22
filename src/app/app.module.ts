import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es-Ar'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
