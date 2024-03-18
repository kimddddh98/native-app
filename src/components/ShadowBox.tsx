import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import styled from 'styled-components/native';

const ButtonWrap = styled.TouchableOpacity<{title: string}>`
  background-color: ${props => (props.title === 'a' ? '#3498db' : '#9b59b6')};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export default function ShadowBox({title}: {title: string}) {
  return (
    <>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <View style={[styles.shadow]} />
        <ButtonWrap title={title}>
          <Title>{title}</Title>
        </ButtonWrap>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
    }),
  },
});
