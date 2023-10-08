import queryString from 'query-string';
import { JobPositionInterface, JobPositionGetQueryInterface } from 'interfaces/job-position';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobPositions = async (
  query?: JobPositionGetQueryInterface,
): Promise<PaginatedInterface<JobPositionInterface>> => {
  return fetcher('/api/job-positions', {}, query);
};

export const createJobPosition = async (jobPosition: JobPositionInterface) => {
  return fetcher('/api/job-positions', { method: 'POST', body: JSON.stringify(jobPosition) });
};

export const updateJobPositionById = async (id: string, jobPosition: JobPositionInterface) => {
  return fetcher(`/api/job-positions/${id}`, { method: 'PUT', body: JSON.stringify(jobPosition) });
};

export const getJobPositionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/job-positions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobPositionById = async (id: string) => {
  return fetcher(`/api/job-positions/${id}`, { method: 'DELETE' });
};
