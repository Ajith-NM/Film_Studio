import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { tmdb_base_image_url } from '../constants/tmdb_constants';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  constructor(private Active: ActivatedRoute, private apiService: ApiService) {}
  // this.posts = await this.Active.snapshot.params['posts']
  imageurl = tmdb_base_image_url;
  content: any;
  actors:any
  id: number;
  media: string
  videos:any
  ngOnInit(): void {
    this.id = this.Active.snapshot.params['id'];
    this.media = this.Active.snapshot.params['media'];

    this.apiService.getMedia(this.id,this.media).subscribe((data: any) => {
      this.content = data;
      console.log(data);
      
    });
    this.apiService.getActors(this.id, this.media).subscribe((data: any) => {
      this.actors = data.cast;
      console.log(data);
    });
    this.apiService.getVideos(this.id, this.media).subscribe((data: any) => {
      this.videos = data.results;
      console.log(data);
    });
  }
}
