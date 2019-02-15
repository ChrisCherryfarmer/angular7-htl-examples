import { Routes } from '@angular/router';

import { HomeComponent } from './+home/home.component';
import { CalculatorComponent } from './+calculator/calculator.component';
import { TypescriptComponent } from './+typescript/typescript.component';
import { GuestListComponent } from './+guest-list/guest-list.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'typescript', component: TypescriptComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'guest-list', component: GuestListComponent}
];
