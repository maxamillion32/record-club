import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [{
  path: '',
  component: AppComponent
}];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
