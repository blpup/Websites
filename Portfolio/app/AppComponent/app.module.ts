import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {RouterModule, Routes} from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {WorksComponent} from '../WorksComponent/works.component';
import {HomeComponent} from '../HomeComponent/home.component';
import {HireUsComponent} from '../HireUsComponent/hireus.component';
import {ContactComponent} from '../ContactComponent/contact.component';
import {AboutComponent} from '../AboutComponent/about.component';

const appRoutes: Routes = [
  {path:'works', component:WorksComponent},
  {path:'contact',component:ContactComponent},
  {path:'hireus',component:HireUsComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'', pathMatch:'full'}
]

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes),FormsModule, BrowserAnimationsModule],
    declarations: [AppComponent,WorksComponent, HomeComponent, HireUsComponent, ContactComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
