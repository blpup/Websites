"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./user");
var HireUsComponent = (function () {
    function HireUsComponent() {
        this.submitted = false;
        this.model = new user_1.User('', '', false, false, false, false, false, false);
    }
    HireUsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.email == "" || this.model.name == "")
            return;
        this.submitted = true;
        console.log(this.model);
        setTimeout(function () { return _this.submitted = false; }, 5000);
    };
    ;
    HireUsComponent.prototype.Activity = function (x) {
        switch (x) {
            case 'marketing':
                if (!this.model.marketing) {
                    this.model.marketing = true;
                }
                else {
                    this.model.marketing = false;
                }
                ;
                break;
            case 'appDesign':
                if (!this.model.appDesign) {
                    this.model.appDesign = true;
                }
                else {
                    this.model.appDesign = false;
                }
                ;
                break;
            case 'graphicDesign':
                if (!this.model.graphicDesign) {
                    this.model.graphicDesign = true;
                }
                else {
                    this.model.graphicDesign = false;
                }
                ;
                break;
            case 'motionDesign':
                if (!this.model.motionDesign) {
                    this.model.motionDesign = true;
                }
                else {
                    this.model.motionDesign = false;
                }
                ;
                break;
            case 'uxDesign':
                if (!this.model.uxDesign) {
                    this.model.uxDesign = true;
                }
                else {
                    this.model.uxDesign = false;
                }
                ;
                break;
            case 'webDesign':
                if (!this.model.webDesign) {
                    this.model.webDesign = true;
                }
                else {
                    this.model.webDesign = false;
                }
                ;
                break;
        }
        ;
    };
    return HireUsComponent;
}());
HireUsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hireus',
        templateUrl: 'hireus.component.html',
        styleUrls: ['hireus.component.min.css']
    })
], HireUsComponent);
exports.HireUsComponent = HireUsComponent;
//# sourceMappingURL=hireus.component.js.map