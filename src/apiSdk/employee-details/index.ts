import queryString from 'query-string';
import { EmployeeDetailsInterface, EmployeeDetailsGetQueryInterface } from 'interfaces/employee-details';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeDetails = async (
  query?: EmployeeDetailsGetQueryInterface,
): Promise<PaginatedInterface<EmployeeDetailsInterface>> => {
  return fetcher('/api/employee-details', {}, query);
};

export const createEmployeeDetails = async (employeeDetails: EmployeeDetailsInterface) => {
  return fetcher('/api/employee-details', { method: 'POST', body: JSON.stringify(employeeDetails) });
};

export const updateEmployeeDetailsById = async (id: string, employeeDetails: EmployeeDetailsInterface) => {
  return fetcher(`/api/employee-details/${id}`, { method: 'PUT', body: JSON.stringify(employeeDetails) });
};

export const getEmployeeDetailsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employee-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeDetailsById = async (id: string) => {
  return fetcher(`/api/employee-details/${id}`, { method: 'DELETE' });
};
