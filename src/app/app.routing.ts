import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './add-record/add-record.component';

const appRoutes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'new',
  component: AddRecordComponent
}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
