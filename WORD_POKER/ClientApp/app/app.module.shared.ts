import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from "./components/createuser/createuser.component";
import { LoginUserComponent } from "./components/loginuser/loginuser.component";
import { PlayComponent } from "./components/play/play.component";
import { PlayMenuComponent } from "./components/playmenu/playmenu.component";
import { TopListComponent } from "./components/toplist/toplist.component";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CreateUserComponent,
        LoginUserComponent,
        PlayComponent,
        PlayMenuComponent,
        TopListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'loginuser', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'createuser', component: CreateUserComponent },
            { path: 'loginuser', component: LoginUserComponent },
            { path: 'play', component: PlayComponent },
            { path: 'playmenu', component: PlayMenuComponent },
            { path: 'toplist', component: TopListComponent },
            { path: '**', redirectTo: 'loginuser' }
        ])
    ]
})
export class AppModuleShared {
}
