# 멍코스 (MungCourse) 모바일 앱

멍코스는 반려견 산책을 위한 경로 추천 및 산책 관리 앱입니다. 반려견 주인이 효과적으로 산책 경로를 계획하고 관리할 수 있도록 도와줍니다.

## 프로젝트 개요

- **기술 스택**: React Native, Expo, TypeScript
- **주요 색상**: #48CF6E (메인 테마 색상)
- **대상 플랫폼**: iOS, Android

## 진행 상황

현재까지 다음 기능이 구현되었습니다:

1. **기본 내비게이션 구조 설정**
   - Expo Router를 사용한 탭 기반 내비게이션
   - 5개의 메인 탭 구현: 홈, 산책 시작, 루틴 설정, 산책 기록, 프로필

2. **홈 화면 UI 구현**
   - 프로필 영역: 사용자와 반려견 정보 표시
   - 버튼 영역: 산책 시작하기 버튼
   - 주변 산책로 영역: 가까운 추천 산책로 목록
   - 산책 지수 영역: 날씨, 미세먼지, 기온 등 산책 조건 표시
   - 지난 경로 영역: 최근 산책 경로 표시

3. **디자인 시스템 설정**
   - 색상 상수 관리 시스템 구현
   - 일관된 UI 컴포넌트 스타일 적용

## 코드 구조

```
mungcourse-client-native/
├── app/               # 메인 앱 코드
│   └── (tabs)/        # 탭 기반 화면
│       ├── _layout.tsx      # 탭 레이아웃 설정
│       ├── index.tsx        # 홈 화면
│       ├── walk.tsx         # 산책 시작 화면
│       ├── routine.tsx      # 루틴 설정 화면
│       ├── history.tsx      # 산책 기록 화면
│       └── profile.tsx      # 프로필 화면
├── components/        # 재사용 가능한 컴포넌트
│   ├── HapticTab/     # 햅틱 피드백 탭 컴포넌트
│   └── ui/            # UI 컴포넌트
│       ├── IconSymbol.tsx    # 아이콘 컴포넌트
│       └── TabBarBackground.tsx  # 탭바 배경 컴포넌트
├── constants/         # 상수 값 관리
│   └── Colors.ts      # 앱 색상 정의
└── hooks/             # 커스텀 훅
    └── useColorScheme.ts  # 시스템 색상 스키마 훅
```

## 주요 기능 및 로직

### 1. 색상 관리 시스템

`constants/Colors.ts` 파일에서 앱 전체에서 사용되는 색상을 중앙 관리합니다:

```typescript
// 멍코스 테마 색상
export const THEME_COLOR = '#48CF6E';
export const TEXT_COLOR = '#666666';
export const BACKGROUND_COLOR = '#FFFFFF';
export const CARD_BACKGROUND_COLOR = '#F5F5F5';
```

### 2. 탭 기반 내비게이션

Expo Router를 사용하여 앱 내비게이션을 구현했습니다. `app/(tabs)/_layout.tsx` 파일에서 탭 레이아웃을 정의합니다:

```typescript
<Tabs
  screenOptions={{
    tabBarActiveTintColor: THEME_COLOR,
    headerShown: false,
    ...
  }}>
  <Tabs.Screen name="index" options={{ title: '홈', ... }} />
  <Tabs.Screen name="walk" options={{ title: '산책 시작', ... }} />
  <Tabs.Screen name="routine" options={{ title: '루틴 설정', ... }} />
  <Tabs.Screen name="history" options={{ title: '산책 기록', ... }} />
  <Tabs.Screen name="profile" options={{ title: '프로필', ... }} />
</Tabs>
```

### 3. 홈 화면 UI

홈 화면은 다음과 같은 섹션으로 구성됩니다:

- **프로필 카드**: 사용자와 반려견 정보를 표시
- **산책 시작 버튼**: 메인 CTA 버튼
- **주변 산책로**: 수평 스크롤 뷰로 구현된 추천 산책로 목록
- **산책 지수**: 현재 산책 조건을 보여주는 카드 UI
- **지난 경로**: 최근 산책 경로 지도 및 정보

## 다음 단계 계획

1. **산책 시작 기능 구현**
   - GPS 트래킹 및 경로 저장 기능
   - 실시간 산책 데이터 시각화

2. **산책 루틴 설정 기능**
   - 정기적인 산책 일정 설정
   - 알림 및 리마인더 기능

3. **산책 기록 시각화**
   - 과거 산책 데이터 분석 및 통계
   - 타임라인 및 지도 기반 시각화

4. **사용자 및 반려견 프로필 관리**
   - 프로필 정보 추가 및 편집 기능
   - 다중 반려견 프로필 지원

## 설치 및 실행 방법

1. 의존성 설치
   ```bash
   npm install
   ```

2. 앱 실행
   ```bash
   npx expo start
   ```

