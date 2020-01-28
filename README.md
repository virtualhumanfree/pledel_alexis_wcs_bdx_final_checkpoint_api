# node-template
This repository give you a starting point with Node JS projects for the following cases: 

## Node Javascript: Run/Dev/Debug

The following scripts launch respectivly: 
- `npm run start`: Run production version
- `npm run start:dev`: Develop - livereload
- `npm run start:debug`: Ability to debug with vscode (activate **auto attach option** ) ctrl+shift+p(_type_ "auto attach")

## Node Javascript + Linter: 

Works by the same way than **Node Javascript** but enforce linting.
- `npm run lint`: Verify syntaxe error and code quality 



## Node Typescript: Run/Build/Dev/Debug

The following scripts launch respectivly: 
- `npm run start`: Run production version
- `npm run start:dev`: Develop - livereload
- `npm run start:debug`: Ability to debug with vscode (activate **auto attach option** ) ctrl+shift+p(_type_ "auto attach")
- `npm run build`: convert typescript to javascript


## Node Typescript + Linter: 

Works by the same way than **Node Typescript** but enforce linting.
- `npm run lint`: Verify syntaxe error and code quality 


## Node Typescript + 3-Tier + mysql: 

A fully debuggeable and linted typescript project with 3 tiers architecture Controller/service/Repository.
Mysql has been choosen to implement the repository layer.
Manual promisify is also present inside DbHelper


## Node Typescript + Abstract 3-tier + mysql: 

A fully debuggeable and linted typescript project with an abstract 3-tiers architecture Controller/service/Repository.
Avoid almost all dupplication


## Node Typescript + typeorm: 

A fully debuggeable and linted typescript and typeorm prepared project. 
The boilerplate come with several example of entity and repository 




