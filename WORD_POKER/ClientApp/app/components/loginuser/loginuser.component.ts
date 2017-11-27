import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';


@Component({
    selector: 'loginuser',
    templateUrl: 'loginuser.component.html'
})

export class LoginUserComponent{
    model: any = {};
    loading = false;
    error = false;

    constructor(
        private http:Http,
        private route: ActivatedRoute,
        private router: Router) { }


    login() {
        this.loading = true;
        this.error = false;
        let options = new RequestOptions({ withCredentials: true });
        this.http.post('http://localhost:5000/word_poker/user/login', this.model, options).subscribe(result => {
            this.loading = false;
            this.router.navigateByUrl('/playmenu');
        }, error => {
            console.error(error);
            this.loading = false;
            this.error = true;
        }
        );
    }

    createUser() {
        this.router.navigateByUrl('/createuser');
    }
}