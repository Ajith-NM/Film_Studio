import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: RegisterComponent },
{ path: '', component: RegisterComponent },
  {path:"**", component:PagenotfoundComponent}

//   {
//     path: 'home',
//     component: NavbarComponent,
//     children: [
//       {
//         path: '',
//         component: HomeComponent,
//         children: [
//           { path: '', redirectTo: 'posts', pathMatch: 'full' },
//           { path: 'videos/:posts', component: ReelsComponent },
//           { path: 'posts', component: PostComponent },
//           { path: 'friends', component: FriendsComponent },
//         ],
//       },
//       { path: 'profile', component: ProfileComponent },
//       { path: 'message', component: MessageComponent },
//     ],
//   },
];
