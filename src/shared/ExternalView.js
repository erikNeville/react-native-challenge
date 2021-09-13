import React from "react";
import { WebView } from "react-native-webview";

export const ExternalView = ({route}) => {

	// if a url param is provided use it, otherwise use default
	const {url} = route.params || "";
	const defaultUrl = "https://www.ign.com";
	return (
		<WebView source={{ uri: url ?? defaultUrl}} />
	);
};