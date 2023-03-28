import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'taskfilter'
})
export class TaskfilterPipe implements PipeTransform {

  transform(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isGlobal);
  }

}
