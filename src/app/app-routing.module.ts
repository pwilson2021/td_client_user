import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { PortfolioFormComponent } from './components/portfolio-form/portfolio-form.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order-form', component: OrderFormComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio-form', component: PortfolioFormComponent},
  {path: 'portfolio-list/:id', component: PortfolioListComponent}

  // {path: 'portfolio', component: PortfolioComponent, children: [
  //   {
  //     path: 'portfolio-form',
  //     component: PortfolioFormComponent
  //   }
  // ]},
  // {path: 'orders', component: OrdersComponent, children: [
  //   {
  //     path: 'order-form',
  //     component: OrderFormComponent
  //   }
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
