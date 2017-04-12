import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: `app.component.html`,
    styleUrls: ['./app.component.min.css', '../../bower_components/font-awesome/css/font-awesome.min.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class AppComponent {
    currentRoute: string;
    private state: any;
    menuOpen = false;
    constructor(router: Router, private location: Location) {
        router.events.subscribe(results => this.routeChanged(results));
        this.state = 'normal';
    };
    private routeChanged(res: any): void {
        if (res.url === "/home") {
            this.currentRoute = '/';
            return;
        }
        this.currentRoute = res.url;
    }
    onAnimate() {
        this.state == 'active' ? this.state = 'inactive' : this.state = 'active';
    }
    OpenMenu(){
      console.log('in')
      this.menuOpen = !this.menuOpen;
    }
}
