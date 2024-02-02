import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from 'src/account-info/account-info.component';
import { LoginComponent } from 'src/login/login.component';
import { RegistrationComponent } from 'src/registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account-info', component: AccountInfoComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
