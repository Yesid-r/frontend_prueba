import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreditosComponent } from './creditos/creditos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path:'register-user', component:RegisterComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'creditos', component:CreditosComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
