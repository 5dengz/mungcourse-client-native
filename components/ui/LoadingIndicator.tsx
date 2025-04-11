import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { THEME_COLOR } from '@/constants/Colors'; // 테마 색상 임포트

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME_COLOR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // 기본 배경색 또는 앱 배경색
  },
});
