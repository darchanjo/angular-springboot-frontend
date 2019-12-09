import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatoCreateComponent } from './components/candidato-create/candidato-create.component';
import { CandidatoDetailComponent } from './components/candidato-detail/candidato-detail.component';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';
import { CandidatoUpdateComponent } from './components/candidato-update/candidato-update.component';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { MenuComponent } from './components/menu/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticationService } from './services/auth/authentication.service';
import { CandidatoService } from './services/candidato/candidato.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,    
    CandidatoCreateComponent,
    CandidatoDetailComponent,
    CandidatoListComponent,
    CandidatoUpdateComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthGuardService,
    AuthenticationService,
    CandidatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
