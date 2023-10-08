import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getEmployeeDetailsById, updateEmployeeDetailsById } from 'apiSdk/employee-details';
import { employeeDetailsValidationSchema } from 'validationSchema/employee-details';
import { EmployeeDetailsInterface } from 'interfaces/employee-details';

function EmployeeDetailsEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<EmployeeDetailsInterface>(
    () => (id ? `/employee-details/${id}` : null),
    () => getEmployeeDetailsById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: EmployeeDetailsInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateEmployeeDetailsById(id, values);
      mutate(updated);
      resetForm();
      router.push('/employee-details');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<EmployeeDetailsInterface>({
    initialValues: data,
    validationSchema: employeeDetailsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Employee Details',
              link: '/employee-details',
            },
            {
              label: 'Update Employee Details',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Employee Details
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.employee_status}
            label={'Employee Status'}
            props={{
              name: 'employee_status',
              placeholder: 'Employee Status',
              value: formik.values?.employee_status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_address}
            label={'Employee Address'}
            props={{
              name: 'employee_address',
              placeholder: 'Employee Address',
              value: formik.values?.employee_address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_emergency_contact}
            label={'Employee Emergency Contact'}
            props={{
              name: 'employee_emergency_contact',
              placeholder: 'Employee Emergency Contact',
              value: formik.values?.employee_emergency_contact,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_details}
            label={'Employee Details'}
            props={{
              name: 'employee_details',
              placeholder: 'Employee Details',
              value: formik.values?.employee_details,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/employee-details')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'employee_details',
    operation: AccessOperationEnum.UPDATE,
  }),
)(EmployeeDetailsEditPage);
