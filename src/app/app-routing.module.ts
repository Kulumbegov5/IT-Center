import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './signing/signing.component';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
