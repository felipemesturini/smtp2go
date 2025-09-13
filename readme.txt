Compile and exec ts file

* npx ts-node file.ts

Declare the command above in package.json

"scripts": {
    "start": "ts-node mail.ts",
}

Rund with this cmd "npm run start"

Transpiler typescript file
npx tsc mail.ts

Init a tsconfig.json

npx tsc --init