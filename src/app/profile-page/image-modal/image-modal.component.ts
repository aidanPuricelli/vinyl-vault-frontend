import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements AfterViewInit{
    showModal: boolean = false;
    newImageUrl: string = '';
    profilePicture: string;
    userId: number;

    constructor(private userService: UserService) {}

    @Output() imageUrlChange = new EventEmitter<string>();

    ngAfterViewInit(): void {
        this.userId = Number(sessionStorage.getItem('userId'));
        this.userService.getUserDetails(24).subscribe(
          (result: any) => {
            this.profilePicture = result.profilePic;
            console.log(this.profilePicture);
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

    updateImage(newUrl: string) {
        this.userService.changeProfilePic(this.userId, newUrl).subscribe(
            response => {
                console.log('Response:', response);
                this.profilePicture = response;
            },
            error => {
                console.error('API Error:', error);
                // Handle error here
            }
        );
        this.closeModal();
        window.location.reload();
    }
}
