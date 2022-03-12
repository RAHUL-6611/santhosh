/**
 * This process can be optimized by creating one subDir and
 * copy & past it to other dirs
 *  */

const fs = require("fs");
const path = require("path");

// index file object
const indexFile = { type: "file", name: "index.html", content: null };

// sub routes for each dept route
const subDirs = [
	"about",
	"faculty",
	"facilities",
	"notices",
	"syllabus",
	"alumini",
	"research",
	"department-committees",
	"upcoming-events",
	"retired-faculty",
	"medal-awards",
	"placements",
	"hod",
].map((name) => {
	return { type: "dir", name, subDirs: [indexFile] };
});

// index route
subDirs.push(indexFile);

// all dept routes
const dirs = [
	"cse",
	"ce",
	"me",
	"che",
	"eee",
	"eie",
	"ece",
	"it",
	"maths",
	"phy",
	"hss",
	"mba",
	"chem",
].map((name) => {
	return { type: "dir", name, subDirs };
});

indexFile.content = fs.readFileSync(
	path.join(__dirname, "build", "index.html")
);

function generateRoutes(dirs, paths = ["build"]) {
	for (let dir of dirs) {
		const directoryPath = path.join(__dirname, ...paths, dir.name);

		if (dir.type === "file") {
			fs.writeFileSync(directoryPath, dir.content);
			continue;
		}

		fs.mkdirSync(directoryPath);
		generateRoutes(dir.subDirs, [...paths, dir.name]);
	}
}

generateRoutes(dirs);
