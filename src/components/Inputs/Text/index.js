import React, { useEffect, useRef, useState, } from 'react';

import { useField } from '@unform/core';

import { TextInput } from 'react-native';

const textInput = ({ name, customStyle, ...props }) => {

  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={value => { inputRef.current && (inputRef.current.value = value) }}
      keyboardAppearance="dark"
      style={{
        ...{
          width: '100%',
          height: 40,
          backgroundColor: '#fff',
          padding: 5,
          paddingHorizontal: 10,
          fontSize: 18,
          fontFamily: 'Montserrat_400Regular',
          marginBottom: 5,
          borderRadius: 2,
        },
        ...customStyle
      }}
      {...props}
    />
  )

}

export default textInput;
