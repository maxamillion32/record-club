import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { AuthService } from '../auth.service';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [AuthService, RecordService]
})

export class NavBarComponent implements OnInit {
  user: any = {};
  fbUser: any;
  showSearch: boolean = false;

  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService, private router: Router) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }  else {
        this.user = {};
      }
    });
    this.as.getAllUsers().subscribe(users => {
      users.forEach(user => {
        if( this.user.uid === user.uid) {
          this.fbUser = user;
        }
      });
    });
  }

  expandAndShow() {
    this.showSearch = true;
  }

  hideExpand() {
    this.showSearch = false;
  }

  login() {
      let that = this;
      this.as.login().then(function() {
        that.router.navigate(['profile']);
      });
  }

  logout() {
    let that = this;
    this.as.logout().then(function() {
      that.router.navigate(['']);
      window.location.reload();
    })
  }

  ngOnInit() {
  }
}
