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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyButton from './components/MyButton';
import {commonStyles} from './styles';
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={commonStyles.container}>
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
    height: 'auto',
    gap: 50,
  },
});
