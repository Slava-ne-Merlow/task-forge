export interface Project {
  id: string;
  name: string;
  description: string | null;
  teamId: string;
  createdAt: string;
  taskCount: number;
}
