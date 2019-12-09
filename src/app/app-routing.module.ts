import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';
import { CandidatoCreateComponent } from './components/candidato-create/candidato-create.component';
import { CandidatoUpdateComponent } from './components/candidato-update/candidato-update.component';
import { CandidatoDetailComponent } from './components/candidato-detail/candidato-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'home',
    component: CandidatoListComponent,
    canActivate: [AuthGuardService]
  },  
  {
    path: 'adicionar',
    component: CandidatoCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'atualizar/:id',
    component: CandidatoUpdateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'detalhe/:id',
    component: CandidatoDetailComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
