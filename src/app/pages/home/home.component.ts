import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/taskdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

taskdata:any;
filteredglobal:any;
filteredtask:any;
filteredpersonal:any;
filteredleader:any;


constructor(private taskService: TaskService) {}
  

ngOnInit() {
  this.taskService.getTasks().subscribe(tasks => {
    this.taskdata= tasks;
    this.filteredtask = this.taskdata.tasks;
    this.filteredglobal = this.filteredtask.filter( (task: { isGlobal: any; })=>task.isGlobal)
    this.filteredpersonal = this.filteredtask.filter( (task: { isGlobal: any; })=>!task.isGlobal)
    this.filteredleader = this.filteredtask.filter( (task: { isLeader: any; })=>task.isLeader)
    console.log(this.filteredtask)
  });
}




}
