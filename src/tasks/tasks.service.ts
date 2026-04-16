import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: any[] = [];
  private id = 1;

  findAll() {
    return this.tasks;
  }

  create(title: string) {
    const task = {
      id: this.id++,
      title,
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  updateTitle(id: number, title: string) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.title = title;
    return task;
  }

  toggle(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return null;

    task.completed = !task.completed;
    return task;
  }

  delete(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return { deleted: true };
  }
}
