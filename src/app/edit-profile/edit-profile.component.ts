import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [AuthService]
})
export class EditProfileComponent implements OnInit {
  @Input() user: any;
  @Input() fbUser: any;
  displayName: string;
  photoURL: string;
  description: string;
  key: string;
  subby: any;
  nameControl: FormControl = new FormControl();

  constructor(private as: AuthService) {
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
    this.as.saveProfile(this.displayName, this.photoURL, this.description, this.key)
  }



  ngOnInit() {
  }



}
