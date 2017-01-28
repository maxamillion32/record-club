import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [AuthService]
})
export class EditProfileComponent implements OnInit {
  @Input() user: any;
  @Input() fbUser: any;
  @Output() canceler = new EventEmitter();
  displayName: string;
  photoURL: string;
  description: string;
  key: string;

  constructor(private as: AuthService, private router: Router) {
    this.as.getAllUsers().subscribe(users => {
      users.forEach(user => {
        if( this.user.uid === user.uid) {
          this.fbUser = user;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.description = user.description;
          this.key = user.$key;
        }
      });
    });
   }

  saveProfile() {
    this.as.saveProfile(this.displayName, this.photoURL, this.description, this.key);
    this.router.navigate(['member', this.key]);
  }

  closeEdit() {
    this.canceler.emit();
  }



  ngOnInit() {
  }



}
