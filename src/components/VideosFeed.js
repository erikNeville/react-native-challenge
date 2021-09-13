import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Card } from "../shared/Card";

const VideosFeed = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://ign-apis.herokuapp.com/videos')
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  // Navigating to a WebView which displays the mp4 file for the selected video
  const handlePress = (item) => {
    navigation.navigate("Article", {url: item.assets[0].url});
    setSelectedId(item.contentId);
  };

  const renderItem = ({item}) => (
    <Card item={item} handlePress={() => handlePress(item)} />
  );

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={data && data.data}
        renderItem={!loading && renderItem}
        keyExtractor={(item) => item.contentId}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 4
  },
});

export default VideosFeed;
