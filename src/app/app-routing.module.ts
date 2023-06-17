import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerSideComponent } from './server-side/server-side.component';

const routes: Routes = [
//   {
//   path:'', redirectTo: '/server-side', pathMatch: 'full',
// },
{
  path: '',
  component: ServerSideComponent,
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
