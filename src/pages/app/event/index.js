import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native';

import { Form } from '@unform/mobile';
import FormTextInput from '../../../components/Inputs/Text';

import { Ionicons } from '@expo/vector-icons';

const event = () => {

  const formRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({
      type: 'ADD_EVENT',
      event: {
        ...formRef.current.getData(),
        coords: { latitude: -23.098910, longitude: -47.236688 }
      },
    })
  }

  return (
    <View style={{
      flex: 1,
      padding: 20
    }}>
      <View style={{ flex: 2 }}>
        <Text style={{
          fontSize: 38,
          fontFamily: 'Montserrat_700Bold'
        }}>
          Launch!
        </Text>
        <Text style={{
          fontSize: 28,
          fontFamily: 'Montserrat_400Regular'
        }}>
          but first, the Basics:
        </Text>
      </View>
      <View style={{ flex: 7 }}>
        <Form ref={formRef} onSubmit={handleClick}>
          <FormTextInput name='name' placeholder='Name' customStyle={{ marginTop: 50 }} />
        </Form>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 4, borderWidth: 1, borderColor: '#2FFF9D' }}>
          <TouchableOpacity style={{ marginHorizontal: 3 }} onPress={() => formRef.current.submitForm()}>
            <Ionicons name='md-send' size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

export default event;
