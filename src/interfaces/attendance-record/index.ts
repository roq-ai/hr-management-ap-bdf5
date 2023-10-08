import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceRecordInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  user_id?: string;

  user?: UserInterface;
  _count?: {};
}

export interface AttendanceRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
