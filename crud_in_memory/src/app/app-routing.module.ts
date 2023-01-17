import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"list",component:UserlistComponent},
  {path:"list/edit/:id",component:EdituserComponent},
  {path:"add",component:AdduserComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
