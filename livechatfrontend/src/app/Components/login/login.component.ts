import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    
    ) { }

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x: any) => {
        console.log('User logged in');

        this.router.navigate(['home']);
      },
      error: (err: any) => {
        console.log(err);
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }
}
