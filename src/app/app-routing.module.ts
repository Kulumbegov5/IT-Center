import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningComponent } from './signing/signing.component';

const routes: Routes = [
  { path: 'signing', component: SigningComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
