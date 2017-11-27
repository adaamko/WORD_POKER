import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';

@Component({
    selector: 'createuser',
    templateUrl: './createuser.component.html'
})

export class CreateUserComponent {
    model: any = {};
    loading = false;
    error = false;
    constructor(
        private http:Http,
        private router: Router) { }

    register() {
        this.loading = true;
        this.error = false;
        let options = new RequestOptions({ withCredentials: true });
        this.http.post('http://localhost:5000/word_poker/user/create_user', this.model, options).subscribe(result => {
            this.loading = false;
            this.router.navigateByUrl('/loginuser');
        }, error => {
            console.error(error);
            this.loading = false;
            this.error = true;
        }
        );
    }

    cancel() {
        this.router.navigateByUrl('/loginuser');
    }
}