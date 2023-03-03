import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn = false;
  
  constructor(
    readonly router: Router,
    readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.loggedInListener();
  }

  loggedInListener(): void {    
    this.authService.subject.subscribe((value) => {
      this.isLoggedIn = !!value;
    });
  }
}
