import React, {useState} from 'react';
import {Pressable, Text, StyleSheet, Alert} from 'react-native';
export default function MyButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <>
      <Pressable
        onPress={() => onPress()}
        onLongPress={() => Alert.alert('long')}
        style={styles.button}
        pressRetentionOffset={{top: 50, left: 50, bottom: 50, right: 50}}
        hitSlop={50}>
        <Text style={styles.color}>{title}</Text>
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: '#3498db',
    borderRadius: 4,
  },
  color: {
    color: '#fff',
  },
});
