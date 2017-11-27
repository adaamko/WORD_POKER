import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'play',
    templateUrl: 'play.component.html',
    styleUrls: ['./play.component.css']
})

export class PlayComponent {
    public articles: Article[];
    selectpicker: any = {};
    sentence: any = {};
    guess: any = {};
    hassentence = false;
    guess_res: any = {};
    hadguess = false;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string, private router: Router) {
        let options = new RequestOptions({ withCredentials: true });
        http.get("http://localhost:5000/word_poker/game/play/en", options).subscribe(result => {
            this.articles = result.json()["articles"] as Article[];
        }, error => console.error(error));
    }

    chooseArticle() {
        let options = new RequestOptions({ withCredentials: true });
        this.http.get('http://localhost:5000/word_poker/game/play_with_article/' + this.selectpicker, options).subscribe(result => {
            this.sentence = result.json()["sentence"];
            this.hassentence = true;
            this.hadguess = false;
        }, error => {
            console.log(error);
        }
        );
    }

    make_guess() {
        let options = new RequestOptions({ withCredentials: true });
        this.http.get('http://localhost:5000/word_poker/game/make_guess/' + this.guess.text, options).subscribe(result => {
            this.guess_res.text = result.json();
            this.hassentence = false;
            this.hadguess = true;
        }, error => {
            console.log(error);
        }
        );
    }
    reload() {
        location.reload();
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


interface Article {
    description: string;
    language: string;
    page_id: number;
    title: string;
}