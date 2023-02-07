import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavComponent } from './admin/nav/nav.component';
import { AloginComponent } from './alogin/alogin.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './admin/view/view.component';
import { AdminComponent } from './admin/admin/admin.component';
import { MainComponent } from './admin/main/main.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { EditComponent } from './admin/edit/edit.component';
import { AdGuard } from './admin/ad.guard';
import { AuthInterceptor } from './admin/auth.interceptor';
import { EmpService } from './service/emp.service';
import { UserComponent } from './user/user.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { HComponent } from './home/h/h.component';
import { AComponent } from './home/a/a.component';
import { CComponent } from './home/c/c.component';
import { RviewComponent } from './admin/rview/rview.component';
import { RaddComponent } from './admin/radd/radd.component';
import { ReditComponent } from './admin/redit/redit.component';
import { BviewComponent } from './admin/bview/bview.component';
import { BeditComponent } from './admin/bedit/bedit.component';
import { BookComponent } from './admin/book/book.component';
import { MlComponent } from './ml/ml.component';
import { MlhomeComponent } from './ml/mlhome/mlhome.component';
import { MlviewComponent } from './ml/mlview/mlview.component';
import { MlbookComponent } from './ml/mlbook/mlbook.component';
import { MlbookingComponent } from './ml/mlbooking/mlbooking.component';
import { MlupdateComponent } from './ml/mlupdate/mlupdate.component';
import { MlmyComponent } from './ml/mlmy/mlmy.component';
import { UhomeComponent } from './user/uhome/uhome.component';
import { UviewComponent } from './user/uview/uview.component';
import { UbookingComponent } from './user/ubooking/ubooking.component';
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
    EditComponent,
    UserComponent,
    ForbidenComponent,
    HComponent,
    AComponent,
    CComponent,
    RviewComponent,
    RaddComponent,
    ReditComponent,
    BviewComponent,
    BeditComponent,
    BookComponent,
    MlComponent,
    MlhomeComponent,
    MlviewComponent,
    MlbookComponent,
    MlbookingComponent,
    MlupdateComponent,
    MlmyComponent,
    UhomeComponent,
    UviewComponent,
    UbookingComponent
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
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule
  ],
  providers: [
    AdGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
