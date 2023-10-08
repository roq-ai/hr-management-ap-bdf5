import { GetQueryInterface } from 'interfaces';

export interface JobPositionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobPositionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
