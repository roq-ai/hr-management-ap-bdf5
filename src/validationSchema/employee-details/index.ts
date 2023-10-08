import * as yup from 'yup';

export const employeeDetailsValidationSchema = yup.object().shape({
  employee_status: yup.string().nullable(),
  employee_address: yup.string().nullable(),
  employee_emergency_contact: yup.string().nullable(),
  employee_details: yup.string().nullable(),
});
