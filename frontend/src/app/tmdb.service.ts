import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor() {}

  //all trending
  private trending = new BehaviorSubject<any>([]);
  public getTrending = this.trending.asObservable();
  updateTrending(data: any) {
    this.trending.next(data);
  }

  //all upcomming
  private upcomming = new BehaviorSubject<any>([]);
  public getUpcomming = this.upcomming.asObservable();
  updateUpcomming(data: any) {
    this.upcomming.next(data);
  }

  //all movies
  private movies = new BehaviorSubject<any>([]);
  public getMovies = this.movies.asObservable();
  updateMovies(data: any) {
    this.movies.next(data);
  }

  //all TvShows
  private shows = new BehaviorSubject<any>([]);
  public getShows = this.shows.asObservable();
  updateShows(data: any) {
    this.shows.next(data);
  }

  //get all posts
  // this.userService.allPosts.subscribe((posts) => {
  //   this.allPosts = posts
  // })

  //  this.apiservice.getposts().subscribe((data) => {
  //   // this.allPosts=data
  //   if (data=="No posts") {
  //     console.log(data);
  //   }
  //  else{
  //   this.userService.updateallPosts(data)
  //   // console.log(this.allPosts);
  //   this.getFriendsid()
  //  }
  // })
}
