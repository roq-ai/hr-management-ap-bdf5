import queryString from 'query-string';
import { BenefitsInterface, BenefitsGetQueryInterface } from 'interfaces/benefits';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBenefits = async (
  query?: BenefitsGetQueryInterface,
): Promise<PaginatedInterface<BenefitsInterface>> => {
  return fetcher('/api/benefits', {}, query);
};

export const createBenefits = async (benefits: BenefitsInterface) => {
  return fetcher('/api/benefits', { method: 'POST', body: JSON.stringify(benefits) });
};

export const updateBenefitsById = async (id: string, benefits: BenefitsInterface) => {
  return fetcher(`/api/benefits/${id}`, { method: 'PUT', body: JSON.stringify(benefits) });
};

export const getBenefitsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/benefits/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBenefitsById = async (id: string) => {
  return fetcher(`/api/benefits/${id}`, { method: 'DELETE' });
};
