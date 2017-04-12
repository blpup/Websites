import {Component} from '@angular/core';
import {User} from './user';
@Component({
    moduleId: module.id,
    selector: 'hireus',
    templateUrl: 'hireus.component.html',
    styleUrls: ['hireus.component.min.css']
})

export class HireUsComponent {
    submitted = false;
    model = new User('', '', false, false, false, false, false, false);
    onSubmit() {
        if (this.model.email == "" || this.model.name == "") return;
        this.submitted = true;
        console.log(this.model);
        setTimeout(() => this.submitted = false, 5000)
    };

    Activity(x: string) {
        switch (x) {
            case 'marketing':
            if (!this.model.marketing) {
                this.model.marketing = true;
            } else {
                this.model.marketing = false;
            };
            break;
            case 'appDesign':
                if (!this.model.appDesign) {
                    this.model.appDesign = true;
                } else {
                    this.model.appDesign = false;
                };
                break;
            case 'graphicDesign':
                if (!this.model.graphicDesign) {
                    this.model.graphicDesign = true;
                }
                else {
                    this.model.graphicDesign = false;
                };
                break;
            case 'motionDesign':
                if (!this.model.motionDesign) {
                    this.model.motionDesign = true;
                }
                else {
                    this.model.motionDesign = false;
                };
                break;
            case 'uxDesign':
                if (!this.model.uxDesign) {
                    this.model.uxDesign = true;
                }
                else {
                    this.model.uxDesign = false;
                };
                break;
            case 'webDesign':
                if (!this.model.webDesign) {
                    this.model.webDesign = true;
                }
                else {
                    this.model.webDesign = false;
                };
                break;

        };
    }
}
