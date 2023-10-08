import queryString from 'query-string';
import { RecruitmentProcessInterface, RecruitmentProcessGetQueryInterface } from 'interfaces/recruitment-process';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRecruitmentProcesses = async (
  query?: RecruitmentProcessGetQueryInterface,
): Promise<PaginatedInterface<RecruitmentProcessInterface>> => {
  return fetcher('/api/recruitment-processes', {}, query);
};

export const createRecruitmentProcess = async (recruitmentProcess: RecruitmentProcessInterface) => {
  return fetcher('/api/recruitment-processes', { method: 'POST', body: JSON.stringify(recruitmentProcess) });
};

export const updateRecruitmentProcessById = async (id: string, recruitmentProcess: RecruitmentProcessInterface) => {
  return fetcher(`/api/recruitment-processes/${id}`, { method: 'PUT', body: JSON.stringify(recruitmentProcess) });
};

export const getRecruitmentProcessById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/recruitment-processes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRecruitmentProcessById = async (id: string) => {
  return fetcher(`/api/recruitment-processes/${id}`, { method: 'DELETE' });
};
