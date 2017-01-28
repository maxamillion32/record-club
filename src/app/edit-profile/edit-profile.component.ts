import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

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
  constructor(private as: AuthService) { }

  saveProfile() {
    this.as.saveProfile(this.user.auth.displayName, this.user.auth.photoURL, this.user.auth.description, this.user.uid)
  }



  ngOnInit() {
  }



}
