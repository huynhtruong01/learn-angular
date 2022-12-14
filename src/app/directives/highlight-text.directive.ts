import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    standalone: true,
    selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.color = 'red'
    }
}
