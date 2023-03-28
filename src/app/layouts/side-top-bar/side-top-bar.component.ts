import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/taskdata.service';
@Component({
  selector: 'app-side-top-bar',
  templateUrl: './side-top-bar.component.html',
  styleUrls: ['./side-top-bar.component.css']
})
export class SideTopBarComponent {

  taskdata:any;
  taskdatalength:any;
  filteredpersonal:any;

  constructor(private taskService: TaskService ){
    this.taskService.getTasks().subscribe(tasks => {
      this.taskdata= tasks;
      this.filteredpersonal = this.taskdata.tasks.filter( (task: { isGlobal: any; })=>!task.isGlobal)
    });
  }


}
