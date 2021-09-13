import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardFooter } from "./CardFooter";
import moment from "moment";

// Would like to go through and find more commonly used values to clean up styling.
const TITLE_SIZE = 22;

// Might break this and VideoCard into separate files for cleanliness, but this works.
const ArticleCard = ({item, author, imgUrl}) => {
	return (
		<>
			<Text style={styles.articleTitle}>
				{item.metadata.headline}
			</Text>
			<Image source={{uri: imgUrl}} style={styles.image} />
			{item.metadata.description !== "" && (
				<Text style={styles.articleDesc}>{item.metadata.description}</Text>
			)}
			{author && (
				<View style={styles.authorView}>
					{item.authors[0].thumbnail !== "" && (
						<Image source={{uri: item.authors[0].thumbnail}} style={styles.authorImage} />
					)}
					<Text>By&nbsp;</Text>
					<Text style={styles.authorName}>{author}</Text>
				</View>
			)}
		</>
	);
};

const VideoCard = ({item, imgUrl}) => {
	return (
		<>
			<Image source={{uri: imgUrl}} style={styles.image} />
			<Text style={styles.videoTitle}>
				{item.metadata.title}
			</Text>
		</>
	);
};

// I would rather not use the 0 index of an array to display information, however this
// works in order to get something on the screen.
export const Card = ({ item, handlePress }) => {
	const imgUrl = item.thumbnails[0].url;

	// Would prefer to map over each author instead of display first author
	const author = item.authors && item.authors.length > 0 ? item.authors[0].name : null;

	// Using moment in the interest of time
	const timeAgo = moment(item.metadata.publishDate, "YYYY-MM-DD").fromNow().toUpperCase();

	return (
		<>
			<View style={styles.timeContainer}>
				<Text style={styles.timeAgo}>{timeAgo}</Text>
			</View>
			<TouchableOpacity style={styles.card} onPress={handlePress}>
				{item.contentType === "article" && (
					<ArticleCard item={item} author={author} imgUrl={imgUrl} />
				)}
				{item.contentType === "video" && (
					<VideoCard item={item} imgUrl={imgUrl} />
				)}	
				<CardFooter contentId={item.contentId} />
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	timeContainer: {
    paddingHorizontal: 24,
		paddingTop: 8
  },
  timeAgo: {
    color: "#BF1313",
    fontWeight: "bold",
		fontFamily: "ARSMaquette-Medium",
    fontSize: 10
  },
	card: {
		padding: 12,
		marginVertical: 8,
		marginHorizontal: 12,
		borderRadius: 8,
		borderColor: '#DFE3E7',
		borderWidth: 2,
	},
	articleTitle: {
		fontWeight: "bold",
		fontFamily: "ARSMaquette-Bold",
		fontSize: TITLE_SIZE,
    paddingBottom: 8
	},
	articleDesc: {
		fontFamily: "ARSMaquette-Regular",
		paddingTop: 8,
		paddingHorizontal: 4
	},
	videoTitle: {
		fontFamily: "ARSMaquette-Regular",
		fontSize: TITLE_SIZE,
		paddingTop: 8
	},
  image: {
    width: "100%",
    height: 200,
    borderRadius: 4
  },
	authorView: {
		marginTop: 16,
		marginHorizontal: 4,
		flexDirection: "row",
		alignItems: "center"
	},
	authorName: {
		textDecorationLine: "underline",
	},
	authorImage: {
		marginRight: 8,
		height: 30,
		width: 30,
		borderRadius: 50
	},
});
