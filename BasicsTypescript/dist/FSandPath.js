"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ using the fs module synchronously
// C:\Users\johnson\AppData\Roaming\npm\node_modules
// C:\Users\johnson\AppData\Roaming\npm\node_modules\typescript
// C:\Users\johnson\AppData\Roaming\npm\node_modules\npm
// npm install -g @types/node
/*
C:\Users\johnson>npm list -g --depth=0
C:\Users\johnson\AppData\Roaming\npm
+-- @angular/cli@15.2.4
+-- @types/node@18.15.11
+-- npm@9.6.2
`-- typescript@5.0.2
*/
// fs an path from @types/node package
// run tsc have problem but still successfully compile to js file
// and run js file working ok. 
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function readFile() {
    const dirContents = fs.readdirSync(__dirname);
    console.log("directory contents");
    console.log(dirContents);
    const fileContents = fs.readFileSync(path.join(__dirname, 'main.js'), {
        encoding: 'utf-8',
    });
    console.log(fileContents);
}
readFile();
