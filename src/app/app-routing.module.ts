import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { DescriptionComponent } from './description/description.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  //login   /4200
  {
    path:'',component:LoginComponent
  },
  
  //register   /4200/register
  {
    path:'register',component:RegisterComponent
  },
  //dashboard   /4200/dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'watchlist',component:WatchListComponent
  },
  { 
    path: 'description', component: DescriptionComponent
  },
  { 
    path: 'demo', component: DemoComponent
  },
  { 
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
