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
import * as fs from 'fs'

import * as path from 'path';

function readFile() {
  const dirContents = fs.readdirSync(__dirname);
  console.log("directory contents");
  console.log(dirContents);

  const fileContents = fs.readFileSync(
    path.join(__dirname, 'main.js'),
    {
      encoding: 'utf-8',
    },
  );

  console.log(fileContents);
}

readFile();
