import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingAlbums from "../components/trendingAlbums";
import AlbumList from "../components/albumList";

const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const [newRelease, setNewRelease] = useState([1, 2, 3]);
  return (
    <View className="flex-1" style={styles.background}>
      {/* search bar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light"></StatusBar>
        <View className="flex-row justify-between items-center mx-4">
          <Bars3BottomLeftIcon
            size="30"
            strokeWidth={2}
            color="white"
          ></Bars3BottomLeftIcon>
          <Text className="text-3xl font-bold" style={styles.text}>
            RateYourMusic
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon
              size="30"
              strokeWidth={2}
              color="white"
            ></MagnifyingGlassIcon>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending songs carousel */}
        <TrendingAlbums data={trending}></TrendingAlbums>
        
        {/* Newly Released Albums */}
        <AlbumList title="New Releases" data={newRelease}></AlbumList>

        {/* Top Rated Albums */}
        <AlbumList title="Top Albums" data={topRated}></AlbumList>
      </ScrollView>
    </View>
  );
}
