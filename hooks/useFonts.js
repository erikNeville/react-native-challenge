import * as Font from "expo-font";

export default useFonts = async () => {
	await Font.loadAsync({
		"ARSMaquette-Bold": require("../assets/fonts/ars/ARSMaquette-Bold.otf"),
		"ARSMaquette-Medium": require("../assets/fonts/ars/ARSMaquette-Medium.otf"),
		"ARSMaquette-Regular": require("../assets/fonts/ars/ARSMaquette-Regular.otf"),
		"Visby-Heavy": require("../assets/fonts/visby/VisbyRoundCF-Heavy.otf"),
		"Visby-Bold": require("../assets/fonts/visby/VisbyRoundCF-Bold.otf"),
	});
};