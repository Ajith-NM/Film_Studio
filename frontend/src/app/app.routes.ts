import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MovieComponent } from './movie/movie.component';
import { VideoComponent } from './video/video.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'videos/:id', component: AllmoviesComponent },
  { path: 'view-details/:id', component: MovieComponent },
  { path: 'play/:id', component: VideoComponent },
  { path: '**', component: PagenotfoundComponent },
];
