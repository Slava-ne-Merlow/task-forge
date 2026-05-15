export interface TeamMemberWorkload {
  userId: string;
  name: string;
  email: string;
  role: string;
  tasksByStatus: {
    todo: number;
    in_progress: number;
    review: number;
    done: number;
  };
  totalTasks: number;
  loggedHours: number;
  estimatedHours: number;
}
