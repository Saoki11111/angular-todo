import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks = [
    {title: '牛乳を買う', done: false, deadline: new Date('2021-01-01')},
    {title: '可燃ゴミを出す', done: true, deadline: new Date('2020-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2020-01-03')},
  ];

  addTask(task: any) {
    this.tasks.push(task);
  }
}
