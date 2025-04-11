import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors, THEME_COLOR } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: THEME_COLOR,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarLabelStyle: { // 레이블 스타일 추가
          marginTop: 4, // 아이콘과 텍스트 사이 여백 (텍스트 상단 여백)
          fontSize: 11,
          fontWeight: 'semibold',
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            height: 65, // iOS 탭 바 높이 설정
          },
          default: {
            height: 65, // 기본(Android/Web) 탭 바 높이 설정
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="house.fill" color={color} />, // 아이콘 크기 원복 (24->28)
        }}
      />
      <Tabs.Screen
        name="walk"
        options={{
          title: '산책 시작',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="figure.walk" color={color} />, // 아이콘 크기 원복 (24->28)
        }}
      />
      <Tabs.Screen
        name="routine"
        options={{
          title: '루틴 설정',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="calendar" color={color} />, // 아이콘 크기 원복 (24->28)
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '산책 기록',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="clock.fill" color={color} />, // 아이콘 크기 원복 (24->28)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color }: { color: string }) => <IconSymbol size={28} name="person.fill" color={color} />, // 아이콘 크기 원복 (24->28)
        }}
      />
    </Tabs>
  );
}
