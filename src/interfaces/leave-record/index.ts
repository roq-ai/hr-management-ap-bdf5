import { GetQueryInterface } from 'interfaces';

export interface LeaveRecordInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LeaveRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
}
