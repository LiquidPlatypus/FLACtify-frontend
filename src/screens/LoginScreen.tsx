import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react";

export default function LoginScreen() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>FLACtify</Text>
			<TextInput
				style={styles.input}
				onChangeText={setUserName}
				value={userName}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setEmail}
				value={email}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setPassword}
				value={password}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 600,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	}
})