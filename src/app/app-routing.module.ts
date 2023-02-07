import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdGuard } from './admin/ad.guard';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BeditComponent } from './admin/bedit/bedit.component';
import { BookComponent } from './admin/book/book.component';
import { BviewComponent } from './admin/bview/bview.component';
import { EditComponent } from './admin/edit/edit.component';
import { MainComponent } from './admin/main/main.component';
import { RaddComponent } from './admin/radd/radd.component';
import { ReditComponent } from './admin/redit/redit.component';
import { RviewComponent } from './admin/rview/rview.component';
import { ViewComponent } from './admin/view/view.component';
import { AloginComponent } from './alogin/alogin.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { AComponent } from './home/a/a.component';
import { CComponent } from './home/c/c.component';
import { HComponent } from './home/h/h.component';
import { HomeComponent } from './home/home.component';
import { MlComponent } from './ml/ml.component';
import { MlbookComponent } from './ml/mlbook/mlbook.component';
import { MlbookingComponent } from './ml/mlbooking/mlbooking.component';
import { MlhomeComponent } from './ml/mlhome/mlhome.component';
import { MlmyComponent } from './ml/mlmy/mlmy.component';
import { MlupdateComponent } from './ml/mlupdate/mlupdate.component';
import { MlviewComponent } from './ml/mlview/mlview.component';
import { UbookingComponent } from './user/ubooking/ubooking.component';
import { UhomeComponent } from './user/uhome/uhome.component';
import { UserComponent } from './user/user.component';
import { UviewComponent } from './user/uview/uview.component';

const routes: Routes = [
 {path:'home',component:HomeComponent,
children:[
  {path:'h',component:HComponent},
  {path:'a',component:AComponent},
  {path:'c',component:CComponent}
]
},
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'login',component:AloginComponent},
 {path:'admin',component:AdminComponent,data:{roles:['Admin']},canActivate:[AdGuard],
  children:[
    {path:'view',component:ViewComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'main',component:MainComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'addUser',component:AddEmpComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'User',component:EditComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'User/:eid',component:EditComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'roomview',component:RviewComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'roomadd',component:RaddComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'roomedit/:roomId',component:ReditComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'bookview',component:BviewComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'bookedit/:bid',component:BeditComponent,data:{roles:['Admin']},canActivate:[AdGuard]},
    {path:'book/:rid',component:BookComponent,data:{roles:['Admin']},canActivate:[AdGuard]}


  ]
},
{path:'manager',component:MlComponent,data:{roles:['Manager']},canActivate:[AdGuard],
children:[
  {path:'mlhome',component:MlhomeComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'mlview',component:MlviewComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'mlbook/:rid',component:MlbookComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'mlbooking',component:MlbookingComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'mlupdate/:bid',component:MlupdateComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'mlmy',component:MlmyComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
  {path:'roomview',component:RviewComponent,data:{roles:['Manager']},canActivate:[AdGuard]},
 
]
},
{path:'leads',component:MlComponent,data:{roles:['Lead']},canActivate:[AdGuard],
children:[
  {path:'mlhome',component:MlhomeComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'mlview',component:MlviewComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'mlbook/:rid',component:MlbookComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'mlbooking',component:MlbookingComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'mlupdate/:bid',component:MlupdateComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'mlmy',component:MlmyComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
  {path:'roomview',component:RviewComponent,data:{roles:['Lead']},canActivate:[AdGuard]},
 
]
},
{path:'user',component:UserComponent,canActivate:[AdGuard],data:{roles:['Employee']},
children:[
  {path:'uhome',component:UhomeComponent,data:{roles:['Employee']},canActivate:[AdGuard]},
  {path:'uview',component:UviewComponent,data:{roles:['Employee']},canActivate:[AdGuard]},
  {path:'ubooking',component:UbookingComponent,data:{roles:['Employee']},canActivate:[AdGuard]},
  {path:'roomview',component:RviewComponent,data:{roles:['Employee']},canActivate:[AdGuard]},

]
},
{path:'forbiden',component:ForbidenComponent},
{path:'**',redirectTo:'/forbiden',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
