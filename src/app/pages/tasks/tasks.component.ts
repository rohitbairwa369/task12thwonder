import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/taskdata.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  filterType = 'personal';
  filteredtask:any;
  filteredglobal:any
  filteredpersonal:any;
  filteredleader:any;

  constructor(private taskService: TaskService) {}
  taskdata:any;
  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskdata= tasks;
      this.filteredtask = this.taskdata.tasks;
      this.filteredglobal = this.filteredtask.filter( (task: { isGlobal: any; })=>task.isGlobal)
      this.filteredpersonal = this.filteredtask.filter( (task: { isGlobal: any; })=>!task.isGlobal)
      this.filteredleader = this.filteredtask.filter( (task: { isLeader: any; })=>task.isLeader)
    });
  }


  newTask: string = '';

  addTask() {
    if (this.newTask !== '') {
      this.filteredpersonal.push({
        "text": this.newTask,
        "isGlobal": true,
        "isLeader": true,
        "creator": "Rohit Bairwa",
        "isCompleted": true,
        "start":"2019-09-07",
        "end":"null"
      });
      this.newTask = '';
  }
}


}
