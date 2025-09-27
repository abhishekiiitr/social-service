import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
