import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },

    { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
    { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },

    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
