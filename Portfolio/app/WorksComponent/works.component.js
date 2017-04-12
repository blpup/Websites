"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var work_service_1 = require("./work.service");
var animations_1 = require("@angular/animations");
var WorksComponent = (function () {
    function WorksComponent(workService) {
        this.workService = workService;
        this.currentId = 2;
        this.state = "active";
    }
    ;
    WorksComponent.prototype.ngOnInit = function () {
        this.getAllWorks();
        this.getWork(this.currentId);
    };
    ;
    WorksComponent.prototype.next = function () {
        var _this = this;
        this.state = "inactive";
        this.currentId += 1;
        if (this.currentId === this.works.length + 1) {
            this.currentId = 1;
        }
        this.getWork(this.currentId, this.works.length);
        setTimeout(function () {
            _this.state = "active";
        }, 100);
    };
    ;
    WorksComponent.prototype.prev = function () {
        this.currentId -= 1;
        if (this.currentId === 0) {
            this.currentId = this.works.length;
        }
        this.getWork(this.currentId, this.works.length);
    };
    ;
    WorksComponent.prototype.getWork = function (current, length) {
        var _this = this;
        var left = current - 1;
        var right = current + 1;
        if (current === 1) {
            left = length;
        }
        ;
        if (current === length) {
            right = 1;
        }
        this.workService.getWork(current).then(function (work) { return _this.currentWork = work; });
        this.workService.getWork(right).then(function (work) { return _this.nextWork = work; });
        this.workService.getWork(left).then(function (work) { return _this.previousWork = work; });
    };
    WorksComponent.prototype.getAllWorks = function () {
        var _this = this;
        this.workService.getWorks().then(function (works) { return _this.works = works; });
    };
    return WorksComponent;
}());
WorksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'work',
        templateUrl: 'works.component.html',
        styleUrls: ['works.component.min.css'],
        providers: [work_service_1.WorkService],
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({
                    opacity: 0,
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    opacity: 1,
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorksComponent);
exports.WorksComponent = WorksComponent;
;
//# sourceMappingURL=works.component.js.map