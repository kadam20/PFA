import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { UsersComponent } from './components/users/users.component';
import { InvalidRouteComponent } from './components/error-pages/invalid-route/invalid-route.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'currencies', component: CurrenciesComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: InvalidRouteComponent },
];
