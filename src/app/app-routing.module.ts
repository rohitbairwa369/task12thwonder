import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarviewComponent } from './pages/calendarview/calendarview.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'tasks/calendar',
    component:CalendarviewComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
