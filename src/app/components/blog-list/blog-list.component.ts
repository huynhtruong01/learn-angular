import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeLast, takeUntil } from 'rxjs'
import { BlogService } from 'src/app/services/blog.service'

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit, OnDestroy {
    blogList: any[] = []
    unsubscribe$ = new Subject<void>()

    constructor(private blogService: BlogService) {}

    ngOnInit(): void {
        this.blogService.blogs
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => (this.blogList = data))
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next()
        this.unsubscribe$.complete()
    }
}
