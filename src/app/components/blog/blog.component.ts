import { Component, OnInit } from '@angular/core';
import { BlogApiService } from 'src/app/services/blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any = []
  constructor(private blogApiService: BlogApiService) { }

  ngOnInit(): void {
    this.blogApiService.getAllBlogs().subscribe({
      next: (data: any) => {
        this.blogs = data
      }
    })
  }

}
