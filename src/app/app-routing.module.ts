import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
    { path: 'login', component: LoginComponent },

    { path: 'register', loadChildren: () => import('./components/register/register.module').then((m) => m.RegisterModule) },
    { path: 'users', loadChildren: () => import('./components/users/users.module').then((m) => m.UsersModule), canActivate: [AuthGuard] },

    { path: '**', redirectTo: 'users' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
