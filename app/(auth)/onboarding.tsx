import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function OnboardingScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">온보딩 화면</ThemedText>
      {/* 온보딩 콘텐츠 추가 */}
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
