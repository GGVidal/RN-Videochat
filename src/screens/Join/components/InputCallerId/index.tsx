import React from 'react';
import {TextInputProps} from 'react-native';
import {StyledTextInput, TextInputWrapper} from './style';

export const InputCallerId = ({
  placeholder,
  value,
  onChangeText,
}: TextInputProps) => {
  return (
    <TextInputWrapper>
      <StyledTextInput
        multiline={true}
        numberOfLines={1}
        cursorColor={'#5568FE'}
        placeholder={placeholder}
        placeholderTextColor={'#9A9FA5'}
        value={value}
        keyboardType={'numeric'}
        onChangeText={onChangeText}
      />
    </TextInputWrapper>
  );
};
