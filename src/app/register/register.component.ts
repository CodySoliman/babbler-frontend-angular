import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        public http: HttpClient) { }

    register() {
      this.loading = true;
      let parameter = JSON.stringify({title:"user", body:"a sxaasxasx a", userId:"1"});
      this.http.post('http://localhost:3000/posts/', {title: 'user' , author: 'a sxaasxasx a'}).subscribe(
        res => {
          console.log(res)
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
