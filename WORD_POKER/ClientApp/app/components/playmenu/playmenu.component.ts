import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';


@Component({
    selector: 'playmenu',
    templateUrl: 'playmenu.component.html'
})

export class PlayMenuComponent {

    constructor(
        private http:Http,
        private router: Router) {
    }

    play() {
        this.router.navigateByUrl('/play');
    }

    logout() {
        let options = new RequestOptions({ withCredentials: true });
        this.http.get('http://localhost:5000/word_poker/user/logout', options).subscribe(result => {
            this.router.navigateByUrl('/loginuser');
        }, error => {
            console.error(error);
        }
        );
    }
}