import queryString from 'query-string';
import { SalaryStructureInterface, SalaryStructureGetQueryInterface } from 'interfaces/salary-structure';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalaryStructures = async (
  query?: SalaryStructureGetQueryInterface,
): Promise<PaginatedInterface<SalaryStructureInterface>> => {
  return fetcher('/api/salary-structures', {}, query);
};

export const createSalaryStructure = async (salaryStructure: SalaryStructureInterface) => {
  return fetcher('/api/salary-structures', { method: 'POST', body: JSON.stringify(salaryStructure) });
};

export const updateSalaryStructureById = async (id: string, salaryStructure: SalaryStructureInterface) => {
  return fetcher(`/api/salary-structures/${id}`, { method: 'PUT', body: JSON.stringify(salaryStructure) });
};

export const getSalaryStructureById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/salary-structures/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalaryStructureById = async (id: string) => {
  return fetcher(`/api/salary-structures/${id}`, { method: 'DELETE' });
};
