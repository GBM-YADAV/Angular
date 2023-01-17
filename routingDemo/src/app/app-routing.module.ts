import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { Grandchild2Component } from './grandchild2/grandchild2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,
      children:
      [
        {path:"child",component:ChildComponent,
        children:
        [
          {path:"grandchild",component:GrandchildComponent},
          {path:"grandchild2",component:Grandchild2Component}
        ]
        },
        {path:"child1",component:Child1Component}
      ]
  },
  {path:"**",redirectTo:"home"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
