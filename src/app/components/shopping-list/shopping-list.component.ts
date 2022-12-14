import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from 'src/app/services/users.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService
    ) {}

    ngOnInit(): void {}

    handleNavClick(): void {
        console.log(this.route)
        this.router.navigate(['shoppings'], {
            relativeTo: this.route,
        })
    }

    handleNav2Click(): void {
        this.router.navigate(['/shoppings', 2, 'edit'], {
            relativeTo: this.route,
            queryParams: { page: '1' },
            fragment: 'loading',
        })
    }

    handleLoadUsers(): void {
        this.usersService.getAllUser().subscribe({
            next: (res) => {
                console.log(res)
            },
        })
    }
}
