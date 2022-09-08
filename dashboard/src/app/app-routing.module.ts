import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WorkspaceComponent } from './workspace/workspace.component';
const routes: Routes = [
  {
    path:"",
    component:UserComponent
  },
  {
    path:"workspace",
    component:WorkspaceComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
