import React, {useState} from 'react';
import {Alert, StatusBar, StyleSheet, useColorScheme} from 'react-native';

import Myheader from './layout/MyHeader';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyButton from './components/MyButton';
import {commonStyles} from './styles';
import ShadowBox from './components/ShadowBox';
import styled, {ThemeProvider} from 'styled-components/native';
import customStyle from './styled/main';
import Input from './components/Input';
const {theme: customTheme} = customStyle();
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;
const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0 20px;
`;
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const [count, setCount] = useState(1);
  const [title, setTitle] = useState('a');
  function addTask() {
    Alert.alert(`입력된값 : ${title}`);
    setTitle('');
  }
  function inputOnchange(newText: string) {
    setTitle(newText);
  }
  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Title>TODO List</Title>
        <Input
          placeholder={'asdasd'}
          value={title}
          addTask={addTask}
          inputOnchange={inputOnchange}
        />
        {/* <Myheader /> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={commonStyles.container}>
          <ShadowBox title={'a'} />
          <View style={styles.wrap}>
            <Text>{count}</Text>
            <MyButton title="+" onPress={() => setCount(count + 1)} />
            <MyButton title="-" onPress={() => setCount(count - 1)} />
          </View>

          <View style={styles.wrap}>
            <Text>{title}</Text>
            <TextInput
              style={[commonStyles.input]}
              value={title}
              onChange={e => setTitle(e.nativeEvent.text)}
            />
          </View>
        </ScrollView> */}
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 500,
    gap: 10,
  },
  header: {
    height: 64,
    backgroundColor: '#030303',
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whiteColor: {
    color: '#fff',
  },
});
