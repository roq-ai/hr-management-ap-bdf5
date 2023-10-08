import queryString from 'query-string';
import { PerformanceReviewInterface, PerformanceReviewGetQueryInterface } from 'interfaces/performance-review';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPerformanceReviews = async (
  query?: PerformanceReviewGetQueryInterface,
): Promise<PaginatedInterface<PerformanceReviewInterface>> => {
  return fetcher('/api/performance-reviews', {}, query);
};

export const createPerformanceReview = async (performanceReview: PerformanceReviewInterface) => {
  return fetcher('/api/performance-reviews', { method: 'POST', body: JSON.stringify(performanceReview) });
};

export const updatePerformanceReviewById = async (id: string, performanceReview: PerformanceReviewInterface) => {
  return fetcher(`/api/performance-reviews/${id}`, { method: 'PUT', body: JSON.stringify(performanceReview) });
};

export const getPerformanceReviewById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/performance-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePerformanceReviewById = async (id: string) => {
  return fetcher(`/api/performance-reviews/${id}`, { method: 'DELETE' });
};
