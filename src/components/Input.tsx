import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useColorScheme, useWindowDimensions} from 'react-native';
const StyledInput = styled.TextInput<{width: number}>`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.itemBackground};
  font-size: 25px;
  color: ${({theme}) => theme.text};
`;
function Input({
  placeholder,
  value,
  addTask,
  inputOnchange,
}: {
  placeholder: string;
  value: string;
  addTask: () => void;
  inputOnchange: (text: string) => void;
}) {
  const width = useWindowDimensions().width;
  const isDark = useColorScheme() === 'dark';
  return (
    <>
      <StyledInput
        width={width}
        value={value}
        onChangeText={inputOnchange}
        onSubmitEditing={addTask}
        maxLength={50}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

export default Input;
