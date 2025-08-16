import { Schedule } from '../src/models/task/Schedule';
import { User } from '../src/models/user/User';
import { Task } from '../src/models/task/Task';

describe('Schedule class', () => {
  it('should assign and retrieve tasks for users', () => {
    const schedule = new Schedule();
    const user1 = { name: 'User1' } as User;
    const user2 = { name: 'User2' } as User;
    const task1 = { title: 'Task1' } as Task;
    const task2 = { title: 'Task2' } as Task;
    schedule.assignTaskToUser(user1, task1);
    schedule.assignTaskToUser(user1, task2);
    schedule.assignTaskToUser(user2, task1);
    expect(schedule.getTasksForUser(user1)).toContain(task1);
    expect(schedule.getTasksForUser(user1)).toContain(task2);
    expect(schedule.getUsersForTask(task1)).toContain(user1);
    expect(schedule.getUsersForTask(task1)).toContain(user2);
  });

  it('should remove tasks from users and users from tasks', () => {
    const schedule = new Schedule();
    const user = { name: 'User' } as User;
    const task = { title: 'Task' } as Task;
    schedule.assignTaskToUser(user, task);
    schedule.removeTaskFromUser(user, task);
    expect(schedule.getTasksForUser(user)).not.toContain(task);
    expect(schedule.getUsersForTask(task)).not.toContain(user);
    schedule.assignTaskToUser(user, task);
    schedule.removeUserFromTask(task, user);
    expect(schedule.getTasksForUser(user)).not.toContain(task);
    expect(schedule.getUsersForTask(task)).not.toContain(user);
  });

  it('should handle edge cases with no assignments', () => {
    const schedule = new Schedule();
    const user = { name: 'User' } as User;
    const task = { title: 'Task' } as Task;
    expect(schedule.getTasksForUser(user)).toEqual([]);
    expect(schedule.getUsersForTask(task)).toEqual([]);
  });
});
