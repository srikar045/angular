import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavComponent } from './admin/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AloginComponent } from './alogin/alogin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './admin/view/view.component';
import { AdminComponent } from './admin/admin/admin.component';
import { MainComponent } from './admin/main/main.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { EditComponent } from './admin/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    AloginComponent,
    HomeComponent,
    ViewComponent,
    AdminComponent,
    MainComponent,
    AddEmpComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
