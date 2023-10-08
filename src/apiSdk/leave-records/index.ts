import queryString from 'query-string';
import { LeaveRecordInterface, LeaveRecordGetQueryInterface } from 'interfaces/leave-record';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeaveRecords = async (
  query?: LeaveRecordGetQueryInterface,
): Promise<PaginatedInterface<LeaveRecordInterface>> => {
  return fetcher('/api/leave-records', {}, query);
};

export const createLeaveRecord = async (leaveRecord: LeaveRecordInterface) => {
  return fetcher('/api/leave-records', { method: 'POST', body: JSON.stringify(leaveRecord) });
};

export const updateLeaveRecordById = async (id: string, leaveRecord: LeaveRecordInterface) => {
  return fetcher(`/api/leave-records/${id}`, { method: 'PUT', body: JSON.stringify(leaveRecord) });
};

export const getLeaveRecordById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/leave-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLeaveRecordById = async (id: string) => {
  return fetcher(`/api/leave-records/${id}`, { method: 'DELETE' });
};
