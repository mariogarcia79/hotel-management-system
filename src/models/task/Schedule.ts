import { User } from '../user/User';
import { Task } from './Task';

export class Schedule {
	private userTasks: Map<User, Task[]>;
	private taskUsers: Map<Task, User[]>;

	constructor() {
		this.userTasks = new Map<User, Task[]>();
		this.taskUsers = new Map<Task, User[]>();
	}

	// Assign a task to a user
	assignTaskToUser(user: User, task: Task): void {
		if (!this.userTasks.has(user)) {
			this.userTasks.set(user, []);
		}
		this.userTasks.get(user)!.push(task);

		if (!this.taskUsers.has(task)) {
			this.taskUsers.set(task, []);
		}
		this.taskUsers.get(task)!.push(user);
	}

	// Get all tasks for a user
	getTasksForUser(user: User): Task[] {
		return this.userTasks.get(user) || [];
	}

	// Get all users assigned to a task
	getUsersForTask(task: Task): User[] {
		return this.taskUsers.get(task) || [];
	}

	// Remove a task from a user
	removeTaskFromUser(user: User, task: Task): void {
		if (this.userTasks.has(user)) {
			this.userTasks.set(user, this.userTasks.get(user)!.filter(t => t !== task));
		}
		if (this.taskUsers.has(task)) {
			this.taskUsers.set(task, this.taskUsers.get(task)!.filter(u => u !== user));
		}
	}

	// Remove a user from a task
	removeUserFromTask(task: Task, user: User): void {
		this.removeTaskFromUser(user, task);
	}
}
