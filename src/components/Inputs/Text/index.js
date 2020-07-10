import React from 'react';

import { TextInput } from 'react-native';

const textInput = ({ ...props }) => {

  return (
    <>
      <TextInput
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#fff',
          padding: 5,
          paddingHorizontal: 10,
          fontSize: 18,
          fontFamily: 'Montserrat_400Regular',
          marginBottom: 5
        }}
        { ...props }
      />
    </>
  )

}

export default textInput;
