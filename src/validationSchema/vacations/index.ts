import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date(),
  end_date: yup.date(),
  employee_id: yup.string().nullable(),
});
