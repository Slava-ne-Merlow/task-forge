export type TeamRole = 'owner' | 'lead' | 'developer';

export interface Team {
  id: string;
  name: string;
  createdAt: string;
  myRole: TeamRole;
}

export interface TeamMember {
  id: string;
  user: {
    id: string;
    email: string;
    name: string;
    createdAt: string;
  };
  role: TeamRole;
  joinedAt: string;
}
