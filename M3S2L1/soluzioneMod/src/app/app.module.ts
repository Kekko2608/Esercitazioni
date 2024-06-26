import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { TuttiComponent } from './tutti/tutti.component';
import { ColoraDirective } from './colora.directive';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'active',
        component: ActivePostsComponent,
    },
    {
        path: 'inactive',
        component: InactivePostsComponent,
    },
    {
        path: 'post/:id',
        component: PostDetailComponent,
    },

    {
        path: 'tutti',
        component: TuttiComponent,
    },
    {
        path: 'single-post',
        component: SinglePostComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostDetailComponent,
        SinglePostComponent,
        TuttiComponent,
        ColoraDirective,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
