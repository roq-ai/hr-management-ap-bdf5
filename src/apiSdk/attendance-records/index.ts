import queryString from 'query-string';
import { AttendanceRecordInterface, AttendanceRecordGetQueryInterface } from 'interfaces/attendance-record';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttendanceRecords = async (
  query?: AttendanceRecordGetQueryInterface,
): Promise<PaginatedInterface<AttendanceRecordInterface>> => {
  return fetcher('/api/attendance-records', {}, query);
};

export const createAttendanceRecord = async (attendanceRecord: AttendanceRecordInterface) => {
  return fetcher('/api/attendance-records', { method: 'POST', body: JSON.stringify(attendanceRecord) });
};

export const updateAttendanceRecordById = async (id: string, attendanceRecord: AttendanceRecordInterface) => {
  return fetcher(`/api/attendance-records/${id}`, { method: 'PUT', body: JSON.stringify(attendanceRecord) });
};

export const getAttendanceRecordById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/attendance-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAttendanceRecordById = async (id: string) => {
  return fetcher(`/api/attendance-records/${id}`, { method: 'DELETE' });
};
