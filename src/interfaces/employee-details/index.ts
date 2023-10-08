import { GetQueryInterface } from 'interfaces';

export interface EmployeeDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  employee_status?: string;
  employee_address?: string;
  employee_emergency_contact?: string;
  employee_details?: string;

  _count?: {};
}

export interface EmployeeDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_status?: string;
  employee_address?: string;
  employee_emergency_contact?: string;
  employee_details?: string;
}
