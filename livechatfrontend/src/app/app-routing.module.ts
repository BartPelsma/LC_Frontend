import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'home', component: HomeComponent},
  {path : 'chat1', component: DialogComponent},
  {path : 'chat2', component: DialogComponent},
  // {path : 'worker-login', component: WorkerLoginComponent},
  {path: '', redirectTo: 'client-home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
