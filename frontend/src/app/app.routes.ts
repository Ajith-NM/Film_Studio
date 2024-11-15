import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MovieComponent } from './movie/movie.component';
import { VideoComponent } from './video/video.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'videos/:id',
    component: AllmoviesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'view-details/:media/:id',
    component: MovieComponent,
    canActivate: [authGuard],
  },
  { path: 'play/:id', component: VideoComponent, canActivate: [authGuard] },
  { path: '**', component: PagenotfoundComponent },
];
