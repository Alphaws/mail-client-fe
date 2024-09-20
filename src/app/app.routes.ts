import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'inbox', component: InboxComponent },
    { path: 'compose', component: EmailComposeComponent },
  ] }
];
