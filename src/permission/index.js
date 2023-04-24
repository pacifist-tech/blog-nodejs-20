import fs from "fs";
import process from "process";

function writeToDest(dest) {
	console.log(
		"\nHave permission to write dest?",
		process.permission?.has("fs.write", dest)
	);
	let status = "Success";
	try {
		const data = { name: "Pacifist" };
		fs.writeFileSync(dest, JSON.stringify(data));
	} catch (error) {
		status = "Failed";
	}
	console.log(status, "writing to", dest);
}

writeToDest("test.json");
writeToDest("tmp/test.json");
