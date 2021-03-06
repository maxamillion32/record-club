import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { Routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecordListComponent } from './record-list/record-list.component';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { MembersComponent } from './members/members.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { RecordsComponent } from './records/records.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RecordEditComponent } from './record-edit/record-edit.component';
import { AdminComponent } from './admin/admin.component';
import { RecordPipe } from './record.pipe';

const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

const firebaseAuthConfig =  {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecordListComponent,
    HomeComponent,
    AddRecordComponent,
    MembersComponent,
    MemberListComponent,
    MemberDetailComponent,
    RecordsComponent,
    AboutComponent,
    UserProfileComponent,
    EditProfileComponent,
    RecordEditComponent,
    AdminComponent,
    RecordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
