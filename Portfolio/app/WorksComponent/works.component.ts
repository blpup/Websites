import {Component, OnInit} from '@angular/core';
import {Work} from './work';
import {WorkService} from './work.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
@Component({
    moduleId: module.id,
    selector: 'work',
    templateUrl: 'works.component.html',
    styleUrls: ['works.component.min.css'],
    providers: [WorkService],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                opacity:0,
                transform: 'scale(1)'
            })),
            state('active', style({
                opacity:1,
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})


export class WorksComponent implements OnInit {
    constructor(private workService: WorkService) { };
    works: Work[];
    previousWork: Work;
    currentWork: Work;
    nextWork: Work;
    currentId = 2;
    state = "active";
    ngOnInit() {
        this.getAllWorks();
        this.getWork(this.currentId);
    };
    next() {
        this.state = "inactive";
        this.currentId += 1;
        if (this.currentId === this.works.length + 1) {
            this.currentId = 1;
        }
        this.getWork(this.currentId, this.works.length);
        setTimeout(()=>{
          this.state = "active";
        },100);
    };
    prev() {
        this.currentId -= 1;
        if (this.currentId === 0) {
            this.currentId = this.works.length;
        }
        this.getWork(this.currentId, this.works.length);
    };
    getWork(current: number, length?: number) {
        let left = current - 1;
        let right = current + 1;
        if (current === 1) {
            left = length;
        };
        if (current === length) {
            right = 1;
        }
        this.workService.getWork(current).then(work => this.currentWork = work);
        this.workService.getWork(right).then(work => this.nextWork = work);
        this.workService.getWork(left).then(work => this.previousWork = work);
    }
    getAllWorks() {
        this.workService.getWorks().then(works => this.works = works);
    }
};
