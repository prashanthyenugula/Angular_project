import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PipedemoComponent } from './Components/pipedemo/pipedemo.component';
import { UserformComponent } from './Components/userform/userform.component';

const routes: Routes = [{path:'userform',
  component:UserformComponent},
  {path:'about',component:AboutComponent},
  {path:'pipe',component:PipedemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
