import React from 'react';
import { FormControl,  FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
 import {Textarea} from '@chakra-ui/react'
import {Input} from '@chakra-ui/input';
import {  useField } from 'formik';

const TextField = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  const isTextarea = props.type === 'textarea';
  const Component = isTextarea ? Textarea : Input;

  return (
    <FormControl isInvalid={meta.error && meta.touched} mb='6'>
        {label && <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel> }
        <Component {...field} {...props} />
        {meta.touched && meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default TextField;
