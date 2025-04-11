import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BACKGROUND_COLOR, CARD_BACKGROUND_COLOR, TEXT_COLOR, THEME_COLOR } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol'; // IconSymbol 임포트 추가

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 프로필 영역 */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            {/* 텍스트 영역 (왼쪽 정렬) */}
            <View style={styles.profileInfo}>
              <Text style={styles.greetingText}>반가워요</Text>
              <View style={styles.nameRow}>
                <View style={styles.dogNameContainer}>
                  <Text style={styles.dogNameText}>몽실이</Text>
                  <IconSymbol name="chevron.down" size={18} color={THEME_COLOR} style={styles.arrowIcon} />
                </View>
                <Text style={styles.guardianSuffixText}> 보호자님!</Text>
              </View>
            </View>
            {/* 프로필 이미지 (오른쪽 정렬) */}
            <Image
              source={{ uri: 'https://placedog.net/100/100' }} // 더미 데이터 적용 (랜덤 강아지 사진)
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* 버튼 영역 */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>산책 시작하기</Text>
          </TouchableOpacity>
        </View>

        {/* 주변 산책로 영역 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>주변 산책로</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.walkCard}>
                <View style={styles.walkCardImageContainer}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.walkCardImage}
                  />
                </View>
                <Text style={styles.walkCardTitle}>산책로 {item}</Text>
                <Text style={styles.walkCardSubtitle}>500m 거리 • 30분 소요</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 산책 지수 영역 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>오늘의 산책 지수</Text>
          <View style={styles.walkIndexCard}>
            <View style={styles.walkIndexRow}>
              <View style={styles.walkIndexItem}>
                <Text style={styles.walkIndexValue}>좋음</Text>
                <Text style={styles.walkIndexLabel}>날씨</Text>
              </View>
              <View style={styles.walkIndexItem}>
                <Text style={styles.walkIndexValue}>보통</Text>
                <Text style={styles.walkIndexLabel}>미세먼지</Text>
              </View>
              <View style={styles.walkIndexItem}>
                <Text style={styles.walkIndexValue}>23°C</Text>
                <Text style={styles.walkIndexLabel}>기온</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 지난 경로 영역 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>지난 산책 경로</Text>
          <View style={styles.pastWalkCard}>
            <View style={styles.pastWalkHeader}>
              <Text style={styles.pastWalkDate}>2023년 6월 15일</Text>
              <Text style={styles.pastWalkStats}>2.5km • 45분</Text>
            </View>
            <View style={styles.pastWalkMapContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/350x150' }}
                style={styles.pastWalkMap}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    padding: 16,
    backgroundColor: BACKGROUND_COLOR,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 요소들을 양쪽 끝으로 분산
  },
  profileInfo: {
    // marginLeft 제거 (왼쪽 정렬을 위해)
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'normal', // 폰트 굵기 변경
    color: '#000000', // 색상 변경 (검정)
  },
  nameRow: { // 이름 + 보호자님 행
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  dogNameContainer: { // 강아지 이름 + 화살표 컨테이너
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2, // 밑줄 스타일을 컨테이너로 이동
    borderBottomColor: THEME_COLOR, // 밑줄 색상
    paddingBottom: 4, // 컨텐츠와 밑줄 사이 여백
    alignSelf: 'flex-start', // 컨테이너 너비를 내용에 맞춤
  },
  dogNameText: { // 강아지 이름 텍스트
    fontSize: 24,
    fontWeight: 'semibold',
    color: THEME_COLOR,
    // borderBottom 스타일 제거
    // paddingBottom 제거
    // lineHeight 제거 (필요시 재조정)
  },
  arrowIcon: { // 화살표 아이콘
    marginLeft: 4, // 이름과의 간격
  },
  guardianSuffixText: { // "보호자님!" 텍스트
  marginLeft: 4, // 이름과의 간격
    fontSize: 24,
    fontWeight: 'normal', // 폰트 굵기 변경
    color: '#000000', // 색상 변경 (검정)
  },
  // profileName 스타일 제거 (이제 사용하지 않음)
  profileImage: {
    width: 70, // 크기 변경
    height: 70, // 크기 변경
    borderRadius: 35, // 원형 유지를 위해 변경
    // marginLeft 제거 (오른쪽 정렬을 위해)
  },
  buttonSection: {
    padding: 16,
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: THEME_COLOR,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: '90%',
  },
  mainButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  horizontalScroll: {
    paddingBottom: 8,
  },
  walkCard: {
    width: 180,
    marginRight: 16,
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 12,
    overflow: 'hidden',
  },
  walkCardImageContainer: {
    width: '100%',
    height: 120,
  },
  walkCardImage: {
    width: '100%',
    height: '100%',
  },
  walkCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    paddingBottom: 4,
  },
  walkCardSubtitle: {
    fontSize: 12,
    color: TEXT_COLOR,
    padding: 8,
    paddingTop: 0,
  },
  walkIndexCard: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 12,
    padding: 16,
  },
  walkIndexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  walkIndexItem: {
    alignItems: 'center',
    flex: 1,
  },
  walkIndexValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME_COLOR,
  },
  walkIndexLabel: {
    fontSize: 14,
    color: TEXT_COLOR,
    marginTop: 4,
  },
  pastWalkCard: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 12,
    overflow: 'hidden',
  },
  pastWalkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  pastWalkDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pastWalkStats: {
    fontSize: 14,
    color: TEXT_COLOR,
  },
  pastWalkMapContainer: {
    width: '100%',
    height: 150,
  },
  pastWalkMap: {
    width: '100%',
    height: '100%',
  },
});
