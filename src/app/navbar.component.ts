import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <ng-container *ngIf="isLogged; else Login">
              <li class="nav-item">
                <a
                  class="nav-link"
                  [routerLink]="['/users']"
                  routerLinkActive="active"
                  >Users</a
                >
              </li>
            </ng-container>
            <ng-template #Login>
              <li class="nav-item">
                <a
                  class="nav-link"
                  [routerLink]="['/login']"
                  routerLinkActive="active"
                  >Accedi</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  [routerLink]="['/signup']"
                  routerLinkActive="active"
                  >Registrati</a
                >
              </li>
            </ng-template>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  user!:any;
  isLogged = false;

  constructor(private authSrv:AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) =>{
      this.user = user;
    })
  }

  //logout() {
  //  this.authSrv.logout();
  //}
}//
