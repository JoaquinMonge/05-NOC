
## NOC Monitoring System
***
### This project uses the following dependencies

  - typescript
  - cron
  - dotenv
  - env-var

You can run npm install after cloning the project to install all the dependencies 

***OR***

You can to start the project from scratch, here are each of the steps to follow:

  - Typescript and other dependencies: 
```
npm i -D typescript @types/node ts-node-dev rimraf
```
- Initialize the configuration file for typescript:
```
npx tsc --init --outDir dist/ --rootDir src
```
- Creat scripts for dev, build y start ([More about TS-Node-dev here](https://www.npmjs.com/package/ts-node-dev))
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

4. Create source directory with app.ts

5. Create presentation folder with server.ts

6. create app.ts in src

7. To install the tool for running jobs https://www.npmjs.com/package/cron 
```
npm i cron 
```

8. To load environment files from .env to process.env https://www.npmjs.com/package/dotenv 
```
npm i dotenv 
```

10. For Verification, sanitization, and type coercion for environment variables https://www.npmjs.com/package/env-var
```
npm i env-var  
```

###dev 
1. Change .env.template file name to .env
2. Configure the environment variables

***
This project uses the repository pattern.

Use cases interact with the repository, and the repository accesses the data source. This approach provides a clear separation between the application logic and data access, making the system more modular and easier to maintain.

