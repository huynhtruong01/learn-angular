import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
