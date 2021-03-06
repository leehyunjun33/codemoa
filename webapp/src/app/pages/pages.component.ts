import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PageComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {        

        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }else if (this.router.url === 'user') {
            this.router.navigate(['/user']);
        }else if (this.router.url === 'profile') {
            
        }
    }

}
