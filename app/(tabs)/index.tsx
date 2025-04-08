import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BACKGROUND_COLOR, CARD_BACKGROUND_COLOR, TEXT_COLOR, THEME_COLOR } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 프로필 영역 */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>멍멍이와 주인</Text>
              <Text style={styles.profileSubtext}>오늘도 좋은 산책 되세요!</Text>
            </View>
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
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSubtext: {
    fontSize: 14,
    color: TEXT_COLOR,
    marginTop: 4,
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
