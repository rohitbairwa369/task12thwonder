import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/taskdata.service';
import { Task } from 'src/app/models/task.model';
import { TaskfilterPipe } from 'src/app/pipes/taskfilter.pipe';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  // template: `
  // <div *ngFor="let task of taskdata | taskfilter:filterType">
  //   {{task| json}}
  // </div>
  // `,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  filterType = 'personal';
  filteredtask: any;
  filteredglobal: any
  filteredpersonal: any;
  filteredleader: any;

  newTask:any = '';
  mockData = {id: 1,
    "text": "tohiiyihfre Test Plan for New Vehicle",
    "isGlobal": false,
    "isLeader": true,
    "creator": "abs Morgan",
    "isCompleted": false,
    start:new Date(),
    end: new Date()
  };
  constructor(private taskService: TaskService) { }
  taskdata: any;
  ngOnInit() {
    this.getTasks();
    this.taskService.updateTask(
      this.mockData, 0);

  }

  getTasks(){
    this.taskService.getTasks().subscribe((tasks) => {
      this.taskdata = tasks;
      console.log(this.taskdata)
    });

  }
  addTask(taskName: any){

    this.taskService.addTask({...this.mockData,text:taskName});
    this.getTasks();
  }
  deleteTask(task:any){
    this.taskService.deleteTask(task);
    this.getTasks();
  }




}
