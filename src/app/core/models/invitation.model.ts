import { User } from './user.model';

export interface Invitation {
  id: string;
  token: string;
  teamId: string;
  teamName: string;
  createdBy: User;
  expiresAt: string;
  usedAt: string | null;
}
