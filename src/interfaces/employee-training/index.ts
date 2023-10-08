import { GetQueryInterface } from 'interfaces';

export interface EmployeeTrainingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeTrainingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
