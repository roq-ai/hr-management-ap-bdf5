import { GetQueryInterface } from 'interfaces';

export interface RecruitmentProcessInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RecruitmentProcessGetQueryInterface extends GetQueryInterface {
  id?: string;
}
