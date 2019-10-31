import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './routing/home/home.component';
import {AboutComponent} from './routing/about/about.component';
import {PostsComponent} from './routing/posts/posts.component';
import {RoutingPostComponent} from './routing/routing-post/routing-post.component';
import {AboutExtraComponent} from './routing/about-extra/about-extra.component';
import {ErrorPageComponent} from './routing/error-page/error-page.component';
import {AuthGuard} from './routing/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: RoutingPostComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
