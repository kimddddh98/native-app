import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';

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
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('a');
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Myheader />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={commonStyles.container}>
        <View style={styles.wrap}>
          <Text>{count}</Text>
          <MyButton title="+" onPress={() => setCount(count + 1)} />
          <MyButton title="-" onPress={() => setCount(count - 1)} />
        </View>
        <ShadowBox title={'a'} />
        <View style={styles.wrap}>
          <Text>{count}</Text>
          <MyButton title="+" onPress={() => setCount(count + 1)} />
          <MyButton title="-" onPress={() => setCount(count - 1)} />
        </View>
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
      </ScrollView>
    </SafeAreaView>
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
