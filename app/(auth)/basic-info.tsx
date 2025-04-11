import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function BasicInfoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">기본 정보 입력 화면</ThemedText>
      {/* 기본 정보 입력 폼 추가 */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
