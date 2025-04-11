import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'; // useState 임포트 추가
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import LoadingIndicator from '@/components/ui/LoadingIndicator'; // LoadingIndicator 임포트 추가

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({ // 변수명 변경 (loaded -> fontsLoaded)
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [appIsReady, setAppIsReady] = useState(false); // 앱 준비 상태 추가

  useEffect(() => {
    async function prepareApp() {
      try {
        // 폰트 로딩 기다리기
        if (!fontsLoaded) return;

        // 여기에 앱 초기 데이터 로딩 로직 추가 (예: 사용자 인증 상태 확인)
        // 지금은 2초 지연으로 시뮬레이션
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {
        console.warn(e); // 에러 처리
      } finally {
        // 로딩 완료 후 앱 준비 상태 변경 및 스플래시 숨기기
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepareApp();
  }, [fontsLoaded]); // fontsLoaded 상태가 변경될 때마다 실행

  // 폰트 로딩 중이거나 앱 준비 중이면 로딩 인디케이터 표시
  if (!fontsLoaded || !appIsReady) {
    return <LoadingIndicator />;
  }

  // 앱 준비 완료 시 메인 컨텐츠 렌더링
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* 인증 상태에 따라 (auth) 그룹을 표시하는 로직 추가 필요 */}
        {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
