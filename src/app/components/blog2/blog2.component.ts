import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BlogService } from 'src/app/services/blog.service'

@Component({
    selector: 'app-blog2',
    templateUrl: './blog2.component.html',
    styleUrls: ['./blog2.component.css'],
})
export class Blog2Component implements OnInit {
    blogForm: FormGroup

    constructor(private fb: FormBuilder, private blogService: BlogService) {}

    ngOnInit(): void {
        this.blogForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
            description: ['', Validators.compose([Validators.required])],
        })
    }

    get title() {
        return this.blogForm.get('title')
    }

    get description() {
        return this.blogForm.get('description')
    }

    handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        if (this.blogForm.invalid) return
        this.blogService.addBlog(this.blogForm.value)
        this.blogForm.reset()
    }
}
