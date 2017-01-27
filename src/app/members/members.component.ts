import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [AuthService]
})
export class MembersComponent implements OnInit {
  user: any = {};
  users: FirebaseListObservable<any[]>;
  constructor(
    private as: AuthService,
    private af: AngularFire,
    private router: Router) {
      this.af.auth.subscribe(user => {
        if(user) {
          this.user = user;
        }  else {
          this.user = {};
        }
      });
  }

  goToMemberDetail(userId: string) {
    this.router.navigate(['member', userId])
  }

  ngOnInit() {
    this.users = this.as.getAllUsers();
  }

}
