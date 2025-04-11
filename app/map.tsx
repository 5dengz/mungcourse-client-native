import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';

export default function MapScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '산책 중' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">산책 지도 화면</ThemedText>
        {/* 지도 및 기록 관련 UI 추가 */}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // 좌우 여백 추가
  },
});
