import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { RecordsComponent } from './records/records.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'new',
  component: AddRecordComponent
}, {
  path: 'members',
  component: MembersComponent
}, {
  path: 'member/:id',
  component: MemberDetailComponent
}, {
  path: 'records',
  component: RecordsComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'profile',
  component: UserProfileComponent
}, {
  path: 'admin',
  component: AdminComponent
}

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
