import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  hire_date: yup.date(),
  job_title: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
