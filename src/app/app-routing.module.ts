import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

//import { AppComponent } from './app.component';
//import { HomePage } from './pages/home.page';
//import { ActivePostsPage } from './pages/active-posts.page';
//import { InactivePostsPage } from './pages/inactive-posts.page';
//import { PostCardComponent } from './components/post-card.component';
//import { PostDetailsPage } from './pages/post-details.page';
//import { UsersPage } from './pages/users.page';
//import { UsersDetailsPage } from './pages/users-details.page';
//import { LoginPage } from './pages/login.page';
//import { SignUpPage } from './pages/sign-up.page';

const routes:Route[] = []

//const routes:Route[] = [
//  {
//    path:"",
//    component:HomePage
//  },
//  {
//    path:"active-posts",
//    component:ActivePostsPage
//  },
//  {
//    path:"inactive-posts",
//    component:InactivePostsPage
//  },
//  {
//    path:"active-posts/:id",
//    component:PostDetailsPage
//  },
//  {
//    path:"inactive-posts/:id",
//    component:PostDetailsPage
//  },
//  {
//    path:"users",
//    component:UsersPage,
//    children:[
//      {
//        path:":id",
//        component:UsersDetailsPage
//      }
//    ]
//  },
//  {
//    path:"login",
//    component:LoginPage
//  },
//  {
//    path:"signup",
//    component:SignUpPage
//  },
//  {
//    path:"**",
//    redirectTo:""
//  }
//]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
