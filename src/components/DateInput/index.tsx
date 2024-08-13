import React from 'react';
import { TextInput } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';

interface DateInputProps {
  value: string;
  onChange: (text: string) => void;
  typeInput: TextInputMaskTypeProp
}

export function DateInput({ value, onChange , typeInput}: DateInputProps){
  return (
    <TextInputMask
      type={typeInput}
      options={{
        format: 'DD/MM/YYYY',
      }}
      value={value}
      onChangeText={onChange}
      placeholder="DD/MM/YYYY"
    />
  );
};
