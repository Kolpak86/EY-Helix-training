import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: 'users', loadChildren: () => import('./users/users.module').then((m) => m.UsersModule) },

    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
