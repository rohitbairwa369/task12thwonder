import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'taskfilter'
})
export class TaskfilterPipe implements PipeTransform {

  transform(tasks: Task[], type: string): Task[] {
    if(type === 'global')
    return tasks.filter(task => task.isGlobal);
    else if(type === 'leader')
    return tasks.filter(task => task.isLeader);
    else if(type === 'personal')
    return tasks.filter(tasks=> !tasks.isGlobal)
    else return tasks;
  }

}
