const mapping: Record<string, string> = {
  'attendance-records': 'attendance_record',
  benefits: 'benefits',
  companies: 'company',
  departments: 'department',
  'employee-details': 'employee_details',
  'employee-trainings': 'employee_training',
  'job-positions': 'job_position',
  'leave-records': 'leave_record',
  'performance-reviews': 'performance_review',
  'recruitment-processes': 'recruitment_process',
  'salary-structures': 'salary_structure',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
