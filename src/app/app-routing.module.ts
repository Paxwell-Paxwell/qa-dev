import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
 { path: 'create-vote', component: CreateVoteComponent },
 { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
