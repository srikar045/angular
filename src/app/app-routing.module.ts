import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdGuard } from './admin/ad.guard';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';
import { MainComponent } from './admin/main/main.component';
import { ViewComponent } from './admin/view/view.component';
import { AloginComponent } from './alogin/alogin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'alog',component:AloginComponent},
 {path:'admin',component:AdminComponent,canActivateChild:[AdGuard],canActivate:[AdGuard],
  children:[
    {path:'view',component:ViewComponent},
    {path:'main',component:MainComponent},
    {path:'addUser',component:AddEmpComponent},
    {path:'editUser',component:EditComponent}
  ]
},
{path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
