import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function HistoryDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: `산책 기록 ${id}` }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">산책 기록 상세</ThemedText>
        <ThemedText>기록 ID: {id}</ThemedText>
        {/* 상세 기록 정보 표시 */}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
