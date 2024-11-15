import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tmdb_auth, tmdb_base_url } from './constants/tmdb_constants';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  base_url = 'http://localhost:4000/';

  postLogin(data: { email: string; password: string }) {
    return this.http.post(`${this.base_url}user/postLogin`, data);
  }
  postSignup(data: { email: string; password: string; username: string }) {
    return this.http.post(`${this.base_url}user/postSignup`, data);
  }

  // tmdb request
  headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: tmdb_auth,
  });
  // get trending all
  getTrendingAll() {
    return this.http.get(`${tmdb_base_url}/trending/all/week?language=en-US`, {
      headers: this.headers,
    });
  }
  // upcomming all
  getUpcommingAll() {
    return this.http.get(`${tmdb_base_url}/trending/movie/day?language=en-US`, {
      headers: this.headers,
    });
  }
  // all movies
  getAllMovies() {
    return this.http.get(`${tmdb_base_url}/trending/movie/day?language=en-US`, {
      headers: this.headers,
    });
  }
  // all shows
  getAllShows() {
    return this.http.get(`${tmdb_base_url}/trending/tv/day?language=en-US`, {
      headers: this.headers,
    });
  }

  //get movie
  getMedia(id: any, media: any) {
    return this.http.get(`${tmdb_base_url}/${media}/${id}?language=en-US`, {
      headers: this.headers,
    });
  }
  getActors(id: any, media: any) {
    return this.http.get(
      `${tmdb_base_url}/${media}/${id}/credits?language=en-US`,
      {
        headers: this.headers,
      }
    );
  }
  getVideos(id: any, media: any) {
    return this.http.get(
      `${tmdb_base_url}/${media}/${id}/videos?language=en-US`,
      {
        headers: this.headers,
      }
    );
  }
}
