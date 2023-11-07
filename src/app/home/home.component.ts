import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Vinyl } from '../vinyl';
import { VinylService } from '../vinyl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  public vinyls: Vinyl[];
  public editVinyl: Vinyl;
  public deleteVinyl: Vinyl;

  constructor(private vinylService: VinylService, private userService: UserService){}

  // SESSION ID
  sessionId: number;
  userId2: number;

  ngAfterViewInit() {
    this.userId2 = Number(sessionStorage.getItem('userId'));
    this.getVinyls(this.userId2);
    console.log(this.userId2);
  }

  public getVinyls(userId2: number): void {
    this.vinylService.getVinyls(this.userId2).subscribe(
      (response: Vinyl[]) => {
        this.vinyls = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addVinyl(userId:number, addForm: NgForm): void {
    const dispForm = document.getElementById('add-form');
    this.vinylService.addVinyl(this.userId2, addForm.value).subscribe(
      (response: Vinyl) => {
        console.log(response);
        this.getVinyls(this.userId2);
        addForm.reset();
        dispForm.style.display = 'none';
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public editVinylFunc(vinyl: Vinyl): void {
    this.closeModal('edit');
    this.vinylService.updateVinyl(vinyl).subscribe(
      (response: Vinyl) => {
        console.log(response);
        this.getVinyls(this.userId2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteVinylFunc(unitId: number): void {
    this.closeModal('delete');
    console.log(this.deleteVinyl.id);
    this.vinylService.deleteVinyl(unitId).subscribe(
      (response: void) => {
        console.log(response);
        this.getVinyls(this.userId2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal(vinyl: Vinyl ,mode: String): void {
    const addForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');
    const deleteForm = document.getElementById('delete-form')
    if (mode === 'add') {
      addForm.style.display = 'block';
    }

    if (mode === 'edit') {
      this.editVinyl = vinyl;
      editForm.style.display = 'block';
    }

    if (mode === 'delete') {
      this.deleteVinyl = vinyl;
      deleteForm.style.display = 'block';
    }
  }

  public closeModal(mode: String): void {
    const editForm = document.getElementById('edit-form');
    const deleteForm = document.getElementById('delete-form');

    if (mode === 'edit') {
      editForm.style.display = 'none';  
    }  

    if (mode === 'delete') {
      deleteForm.style.display = 'none'
    }
  }

}
