import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BenefitsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  user_id?: string;

  user?: UserInterface;
  _count?: {};
}

export interface BenefitsGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
