const fs = require("fs");

function parseInput(filePath) {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch(err)
    {
        console.log("Error reading the json file!!!");
        return false;
    }
}


function decodeY(encodedY, base) {
    return parseInt(encodedY, base);
}

function calculateConstantTerm(points, k) {
    let constantTerm = 0;

    for (let i = 0; i < k; i++) {
        const x_i = points[i].x;
        const y_i = points[i].y;

        let L_i = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                const x_j = points[j].x;
                L_i *= (0 - x_j) / (x_i - x_j);
            }
        }

        constantTerm += y_i * L_i;
    }

    return Math.round(constantTerm);
}

function findSecret(filePath) {
    const input = parseInput(filePath);
    if(!input) return;

    const n = input.keys.n;
    const k = input.keys.k;

    const points = [];
    for (let key in input) {
        if (key !== "keys") {
            const x = parseInt(key);
            const base = parseInt(input[key].base);
            const value = input[key].value;
            const y = decodeY(value, base);
            points.push({ x, y });
        }
    }

    points.sort((a, b) => a.x - b.x);

    const secret = calculateConstantTerm(points, k);

    console.log(`The secret (constant term) is: ${secret}`);
}

findSecret("testcase1.json");
findSecret("testcase2.json");
