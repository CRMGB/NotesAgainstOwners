import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartNotesLoadComponent } from './smart-notes-load/smart-notes-load.component'
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: SmartNotesLoadComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
