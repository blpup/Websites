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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.location = location;
        this.menuOpen = false;
        router.events.subscribe(function (results) { return _this.routeChanged(results); });
        this.state = 'normal';
    }
    ;
    AppComponent.prototype.routeChanged = function (res) {
        if (res.url === "/home") {
            this.currentRoute = '/';
            return;
        }
        this.currentRoute = res.url;
    };
    AppComponent.prototype.onAnimate = function () {
        this.state == 'active' ? this.state = 'inactive' : this.state = 'active';
    };
    AppComponent.prototype.OpenMenu = function () {
        console.log('in');
        this.menuOpen = !this.menuOpen;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "app.component.html",
        styleUrls: ['./app.component.min.css', '../../bower_components/font-awesome/css/font-awesome.min.css'],
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map