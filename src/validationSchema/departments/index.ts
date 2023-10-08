import * as yup from 'yup';

export const departmentValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
