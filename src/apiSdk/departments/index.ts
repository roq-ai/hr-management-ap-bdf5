import queryString from 'query-string';
import { DepartmentInterface, DepartmentGetQueryInterface } from 'interfaces/department';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDepartments = async (
  query?: DepartmentGetQueryInterface,
): Promise<PaginatedInterface<DepartmentInterface>> => {
  return fetcher('/api/departments', {}, query);
};

export const createDepartment = async (department: DepartmentInterface) => {
  return fetcher('/api/departments', { method: 'POST', body: JSON.stringify(department) });
};

export const updateDepartmentById = async (id: string, department: DepartmentInterface) => {
  return fetcher(`/api/departments/${id}`, { method: 'PUT', body: JSON.stringify(department) });
};

export const getDepartmentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/departments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDepartmentById = async (id: string) => {
  return fetcher(`/api/departments/${id}`, { method: 'DELETE' });
};
