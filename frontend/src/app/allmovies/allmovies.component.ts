import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-allmovies',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './allmovies.component.html',
  styleUrl: './allmovies.component.css'
})
export class AllmoviesComponent {

}
