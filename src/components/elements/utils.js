export const UserStatuss = () => {
	let userStatus = [];
	userStatus["LoggedIn"] = "Logged In";
	userStatus["LoggingIn"] = "Logging In";
	userStatus["LoggedOut"] = "Logged Out";
	userStatus["LogInError"] = "Log In Error";
	userStatus["VerifyingLogIn"] = "Verifying Log In";
	return userStatus
}
export const Default = () => {
	let defaults = new Map();
	defaults.set("PIN", "1234");
	return defaults
}

