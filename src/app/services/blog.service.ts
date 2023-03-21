import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    public blogs = new BehaviorSubject<any>(this.getBlogLS('blog'))
    constructor() {}

    getBlogLS(key: string) {
        return JSON.parse(localStorage.getItem(key) || '[]')
    }

    setBlogLS(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data))
    }

    addBlog(data: any): void {
        const newBlogs = this.blogs.value
        newBlogs.push(data)
        this.blogs.next(newBlogs)
        this.setBlogLS('blog', newBlogs)
    }
}
