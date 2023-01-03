import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: (x: any) => {
        console.log('User registerd');

        this.router.navigate(['login']);
      },
      error: (err: any) => {
        console.log(err);
      }
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }
}
