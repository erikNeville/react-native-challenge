import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const CardFooter = ({contentId}) => {
  const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const commentEndPoint = `https://ign-apis.herokuapp.com/comments?ids={${contentId}}`;

	// Would like to make a custom fetching helper function
	useEffect(() => {
		fetch(commentEndPoint)
		.then((res) => res.json())
		.then((json) => setData(json))
		.catch((error) => console.error(error))
		.finally(() => setLoading(false));
	}, []);

	// Wasn't sure where ORANGE BOX or HALF LIFE: ALYX are supposed to come from
	// so they are hard-coded for now.
	// I used an Icon that comes preloaded with Expo for the sake of time.
	return (
		<View style={styles.cardFooter}>
			<View style={styles.footerLeftView}>
				<Text style={styles.footerLeftText}>THE ORANGE BOX</Text>
			</View>
			<View style={styles.footerRightView}>
				<Entypo name="chat" size={22} color="black" style={styles.icon} />
				<Text style={styles.commentCount}>{!loading ? data.content[0].count : "..."}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardFooter: {
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center"
	},
	footerLeftView: {
		flex: 1,
	},
	footerLeftText: {
		color: "#CB3D3D",
		fontFamily: "Visby-Heavy",
		fontSize: 11,
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "flex-start",
		// I would mess with giving a bottom border to a view rather than use this decoration
		textDecorationLine: "underline",
	},
	footerRightView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center"
	},
	commentCount: {
		fontFamily: "Visby-Heavy"
	},
	icon: {
		paddingRight: 8
	}
});