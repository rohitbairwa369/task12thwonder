import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/taskdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

taskdata:any;


constructor(private taskService: TaskService) {}
  


  ngOnInit() {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getTasks().subscribe((tasks) => {
      this.taskdata = tasks;
      console.log(this.taskdata)
    });

  }




}
