import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './signing/signing.component';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component'
import { NewsComponent } from './news/news.component'
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: 'news' , component: NewsComponent},
  { path: 'admin' , component:AdminComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
