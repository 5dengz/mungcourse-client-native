import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { IconSymbol, IconSymbolName } from './IconSymbol'; // IconSymbol과 타입 임포트
import { CARD_BACKGROUND_COLOR, TEXT_COLOR, THEME_COLOR } from '@/constants/Colors'; // 색상 상수 임포트

interface HomeButtonProps {
  title: string;
  iconName: IconSymbolName; // IconSymbol에서 정의한 타입 사용
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function HomeButton({ title, iconName, onPress, style }: HomeButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.titleText}>{title}</Text>
      <IconSymbol name={iconName} size={30} color={THEME_COLOR} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 110,
    backgroundColor: CARD_BACKGROUND_COLOR, // 카드 배경색 사용 (임시)
    borderRadius: 9,
    padding: 17, // 내부 여백 (텍스트 위치 조정을 위해)
    position: 'relative', // 아이콘 절대 위치 지정을 위해
    overflow: 'hidden', // borderRadius 적용을 위해
  },
  titleText: {
    fontSize: 16, // 적절한 크기로 설정 (필요시 조정)
    fontWeight: 'bold',
    color: TEXT_COLOR, // 기본 텍스트 색상 사용 (필요시 조정)
    // 좌측 상단 위치는 padding으로 처리됨
  },
  icon: {
    position: 'absolute',
    right: 17, // 우측 여백
    bottom: 17, // 하단 여백
  },
});
