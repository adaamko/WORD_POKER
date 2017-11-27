import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';


@Component({
    selector: 'toplist',
    templateUrl: 'toplist.component.html'
})

export class TopListComponent {
    public users: User[];

    constructor(
        private http: Http,
        private router: Router) {
        let options = new RequestOptions({ withCredentials: true });
        this.http.get('http://localhost:5000/word_poker/user/toplist/5', options).subscribe(result => {
            this.users = result.json() as User[];
        }, error => {
            console.error(error);
        }
        );
    }
}

interface User {
    all_score_collected: number;
    username: string;
}