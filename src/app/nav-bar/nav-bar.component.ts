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
  showSearch: boolean = false;

  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService, private router: Router) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }  else {
        this.user = {};
      }
    });
  }

  expandAndShow() {
    this.showSearch = true;
  }

  hideExpand() {
    this.showSearch = false;
  }

  login() {
      this.as.login().then(function() {
        this.router.redirect(['']);
      });
  }

  logout() {
    this.as.logout().then(function() {
      this.router.redirect(['']);
    })
  }

  ngOnInit() {

  }
}
