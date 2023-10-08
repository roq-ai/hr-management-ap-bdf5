import queryString from 'query-string';
import { EmployeeTrainingInterface, EmployeeTrainingGetQueryInterface } from 'interfaces/employee-training';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeTrainings = async (
  query?: EmployeeTrainingGetQueryInterface,
): Promise<PaginatedInterface<EmployeeTrainingInterface>> => {
  return fetcher('/api/employee-trainings', {}, query);
};

export const createEmployeeTraining = async (employeeTraining: EmployeeTrainingInterface) => {
  return fetcher('/api/employee-trainings', { method: 'POST', body: JSON.stringify(employeeTraining) });
};

export const updateEmployeeTrainingById = async (id: string, employeeTraining: EmployeeTrainingInterface) => {
  return fetcher(`/api/employee-trainings/${id}`, { method: 'PUT', body: JSON.stringify(employeeTraining) });
};

export const getEmployeeTrainingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/employee-trainings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteEmployeeTrainingById = async (id: string) => {
  return fetcher(`/api/employee-trainings/${id}`, { method: 'DELETE' });
};
