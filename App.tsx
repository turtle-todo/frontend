/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text, Card } from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import {
	Dimensions,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	// Text,
	useColorScheme,
	View,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => (
	<Layout style={{ flex: 1, justifyContent: "center", alignItems: "start" }}>
		<Text category="h1">HOME~~~</Text>
	</Layout>
);

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
}

function App(): React.JSX.Element {
	return (
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<HomeScreen />

			<Layout style={styles.container} level="1">
				<Card style={styles.card} status="primary">
					<Text>Primary</Text>
				</Card>

				<Card style={styles.card} status="success">
					<Text>Success</Text>
				</Card>

				<Card style={styles.card} status="info">
					<Text>Info</Text>
				</Card>

				<Card style={styles.card} status="warning">
					<Text>Warning</Text>
				</Card>

				<Card style={styles.card} status="danger">
					<Text>Danger</Text>
				</Card>

				<Card style={styles.card} status="basic">
					<Text>Basic</Text>
				</Card>
			</Layout>
		</ApplicationProvider>
	);

	// return (
	//   <View style={{ flex: 1, backgroundColor: "tomato" }}>
	//     <View style={{ flex: 1.2, justifyContent: "center", alignItems: "center" }}>
	//       <Text style={{ color: "black", fontSize: 68, fontWeight: 500 }}>Seoul</Text>
	//     </View>
	//     <ScrollView horizontal contentContainerStyle={{  }} pagingEnabled showsHorizontalScrollIndicator={false}>
	//       <View style={{ backgroundColor: "teal", flex: 1, alignItems: "center", width: SCREEN_WIDTH }}>
	//         <Text style={{ fontSize: 158, marginTop: 50 }}>27</Text>
	//         <Text style={{ fontSize: 60, marginTop: -30 }}>Sunny</Text>
	//       </View>
	//       <View style={{ backgroundColor: "teal", flex: 1, alignItems: "center" , width: SCREEN_WIDTH}}>
	//         <Text style={{ fontSize: 158, marginTop: 50 }}>27</Text>
	//         <Text style={{ fontSize: 60, marginTop: -30 }}>Sunny</Text>
	//       </View>
	//       <View style={{ backgroundColor: "teal", flex: 1, alignItems: "center" , width: SCREEN_WIDTH}}>
	//         <Text style={{ fontSize: 158, marginTop: 50 }}>27</Text>
	//         <Text style={{ fontSize: 60, marginTop: -30 }}>Sunny</Text>
	//       </View>
	//       <View style={{ backgroundColor: "teal", flex: 1, alignItems: "center" , width: SCREEN_WIDTH}}>
	//         <Text style={{ fontSize: 158, marginTop: 50 }}>27</Text>
	//         <Text style={{ fontSize: 60, marginTop: -30 }}>Sunny</Text>
	//       </View>
	//     </ScrollView>
	//   </View>
	// )
	// const isDarkMode = useColorScheme() === 'dark';

	// const backgroundStyle = {
	//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	// };

	// return (
	//   <View style={{ flex: 1 }}>
	//     <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
	//     <View style={{ flex: 1.5, backgroundColor: "teal"}}></View>
	//     <View style={{ flex: 1, backgroundColor: "orange"}}></View>
	//     <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
	//   </View>
	// );
	// return (
	//   <SafeAreaView style={backgroundStyle}>
	//     <View style={{ flex: 1 }}>
	//       <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
	//       <View style={{ flex: 1, backgroundColor: "teal"}}></View>
	//       <View style={{ flex: 1, backgroundColor: "orange"}}></View>
	//       <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
	//     </View>
	//     {/* <StatusBar
	//       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
	//       backgroundColor={backgroundStyle.backgroundColor}
	//     />
	//     <ScrollView
	//       contentInsetAdjustmentBehavior="automatic"
	//       style={backgroundStyle}>
	//       <Header />
	//       <View
	//         style={{
	//           backgroundColor: isDarkMode ? Colors.black : Colors.white,
	//         }}>
	//         <Section title="Step One">
	//           Edit <Text style={styles.highlight}>App.tsx</Text> to change this
	//           screen and then come back to see your edits.
	//         </Section>
	//         <Section title="See Your Changes">
	//           <ReloadInstructions />
	//         </Section>
	//         <Section title="Debug">
	//           <DebugInstructions />
	//         </Section>
	//         <Section title="Learn More">
	//           Read the docs to discover what to do next:
	//         </Section>
	//         <LearnMoreLinks />
	//       </View>
	//     </ScrollView> */}
	//   </SafeAreaView>
	// );
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	card: {
		margin: 2,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontWeight: "700",
	},
});

export default App;
