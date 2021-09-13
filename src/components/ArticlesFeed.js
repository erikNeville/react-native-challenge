import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Card } from "./../shared/Card";

const ArticlesFeed = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://ign-apis.herokuapp.com/articles')
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);  

  // I'm navigating to a WebView, but there doesn't seem to be an ideal way
  // to fetch an endpoint to a published article based on the data I'm given.
  // So right now this simply navigates to a WebView showing ign.com.
  const handlePress = (item) => {
    navigation.navigate("Article");
    setSelectedId(item.contentId);
  }

  const renderItem = ({item}) => (
    <Card item={item} handlePress={() => handlePress(item)} />
  );

  return (
    <SafeAreaView style={styles.root}>
      {!loading && (
        <FlatList
          data={data && data.data}
          renderItem={!loading && renderItem}
          keyExtractor={(item) => item.contentId}
          extraData={selectedId}
        />
      )}
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

export default ArticlesFeed;
