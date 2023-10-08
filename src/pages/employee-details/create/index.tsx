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
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createEmployeeDetails } from 'apiSdk/employee-details';
import { employeeDetailsValidationSchema } from 'validationSchema/employee-details';
import { EmployeeDetailsInterface } from 'interfaces/employee-details';

function EmployeeDetailsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: EmployeeDetailsInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createEmployeeDetails(values);
      resetForm();
      router.push('/employee-details');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<EmployeeDetailsInterface>({
    initialValues: {
      employee_status: '',
      employee_address: '',
      employee_emergency_contact: '',
      employee_details: '',
    },
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
              label: 'Create Employee Details',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Employee Details
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
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
    operation: AccessOperationEnum.CREATE,
  }),
)(EmployeeDetailsCreatePage);
