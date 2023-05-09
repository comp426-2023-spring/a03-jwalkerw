#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const options = minimist(process.argv.slice(2));

if (options.h || options.help) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)");
    console.log("");
    console.log("  -h, --help      display this help message and exit");
    console.log("  -r, --rules     display the rules and exit");
    console.log("");
    console.log("Examples:");
    console.log("  node-rpsls        Return JSON with single player RPSLS result.");
    console.log('                  e.g. {"player":"rock"}');
    console.log("  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.");
    console.log('                  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}

if (options.r || options.rules) {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:");
    console.log("");
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock SMOOSHES Lizard");
    console.log("  - Lizard POISONS Spock");
    console.log("  - Spock SMASHES Scissors");
    console.log("  - Scissors DECAPITATES Lizard");
    console.log("  - Lizard EATS Paper");
    console.log("  - Paper DISPROVES Spock");
    console.log("  - Spock VAPORIZES Rock");
    console.log("  - Rock CRUSHES Scissors");
    process.exit(0);
}

const pcMove = options._[0];

try {
    const ans = rpsls(pcMove);
    console.log(JSON.stringify(ans));
} catch (e) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)");
    console.log("");
    console.log("  -h, --help      display this help message and exit");
    console.log("  -r, --rules     display the rules and exit");
    console.log("");
    console.log("Examples:");
    console.log("  node-rpsls        Return JSON with single player RPSLS result.");
    console.log('                  e.g. {"player":"rock"}');
    console.log("  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.");
    console.log('                  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:");
    console.log("");
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock SMOOSHES Lizard");
    console.log("  - Lizard POISONS Spock");
    console.log("  - Spock SMASHES Scissors");
    console.log("  - Scissors DECAPITATES Lizard");
    console.log("  - Lizard EATS Paper");
    console.log("  - Paper DISPROVES Spock");
    console.log("  - Spock VAPORIZES Rock");
    console.log("  - Rock CRUSHES Scissors");
}
