import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

AccountName : String = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.AccountName = localStorage.getItem("AccountName") as String;
  }

}
