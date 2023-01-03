import { Component, OnInit } from '@angular/core';
import { Dialog } from 'src/app/Models/dialog';
import { APIService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogs: Array<Dialog>;


  constructor(private apiService: APIService, private authService: AuthService) { 

    this.dialogs = new Array<Dialog>();
  }

  ngOnInit(): void {

    console.log("kaashje");

    // this.dialogs = this.authService.login(localStorage.getItem("AuthenticationToken"));
    this.GetDialogs();
    

    // this.authService.login(localStorage.getItem("AuthenticationToken"));
  }

  ngAfterViewInit(): void {
    this
  }

  private readCatalogPage(dialogsdata: Array<Dialog> | null): void {
    if (dialogsdata == null) {
      this.dialogs = new Array<Dialog>();
      return;
    }
    this.dialogs = dialogsdata;
  }

  private GetDialogs(): void {
    this.apiService.getdialogsByAccountId(localStorage.getItem("AuthenticationToken")).subscribe({
      next: (resp) => {
        this.readCatalogPage(resp.body)
      },
      error: (err) => {
        // this.showErrorNotification('CART.NO_FLAT_PRODUCT_RESPONSE');
        // this.hasLoadingError = true;
      }
    });
  }
}
