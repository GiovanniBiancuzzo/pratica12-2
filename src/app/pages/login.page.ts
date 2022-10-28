import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  template: `
    <div class="row justify-content-center">
      <div class="col-6">
        <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <form #form="ngForm" (ngSubmit)="onsubmit(form)">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              ngModel
              name="email"
              class="form-control"
              type="email"
              id="email"
            />
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input
              ngModel
              name="password"
              class="form-control"
              type="password"
              id="pass"
            />
          </div>
          <button
            class="btn btn-primary mt-3"
            [disabled]="isLoading"
            type="submit"
          >
            Accedi
            <span
              *ngIf="isLoading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {

  isLoading = false;
  errorMessage = '';

  constructor(private authSrv: AuthService, private router:Router) {}

  ngOnInit(): void {}

  onsubmit(form: NgForm) {
    try {
      this.authSrv.login(form.value).toPromise();
      this.errorMessage = "";
      form.reset();
      this.router.navigate(["/users"])
    }
    catch (error:any) {
      this.errorMessage = error;
    }
  }
}
