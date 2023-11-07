import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements AfterViewInit{

  @ViewChild(ImageModalComponent) imageModal: ImageModalComponent;

  constructor(private userService: UserService) {}

  profilePicture: string;
  username: string;
  userId: number;

  ngAfterViewInit(): void {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.userService.getUserDetails(this.userId).subscribe(
      (result: any) => {
        this.username = result.username;
        this.profilePicture = result.profilePic;
        console.log(this.username);
        console.log(this.profilePicture);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  changeProfilePic(url: string): void {
    this.userService.changeProfilePic(this.userId, url)
      .subscribe(
        (response) => {
          // Handle the response if needed
          console.log('Profile picture changed successfully');
        },
        (error) => {
          // Handle errors here
          console.error('Error changing profile picture', error);
        }
      );
    window.location.reload(); 
  }

  openImageModal() {
    this.imageModal.openModal();
  }

}
