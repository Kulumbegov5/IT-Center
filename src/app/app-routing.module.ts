import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './signing/signing.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signing', component: SigningComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
