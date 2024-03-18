import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';
export default function Myheader() {
  const [state, setState] = useState({
    left: '1',
    right: '2',
  });
  const [dataList, setDataList] = useState([]);
  const getData = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    setDataList(data);
  };
  const pressText = (event: GestureResponderEvent, value: string) => {
    console.log(event);
    setState({
      ...state,
      left: value,
    });
  };
  useEffect(() => {
    // getData();
  }, []);
  return (
    <>
      <View style={haederStyles.header}>
        <Text style={haederStyles.headerColor}>{state.left}</Text>
        <Text
          style={haederStyles.headerColor}
          onPress={e => pressText(e, '바꾸기')}>
          {state.right}
        </Text>
        {/* {dataList.map(data => (
          <Text style={haederStyles.headerColor}>{data.email}</Text>
        ))} */}
      </View>
    </>
  );
}
const haederStyles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#030303',
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerColor: {
    color: '#fff',
  },
});
