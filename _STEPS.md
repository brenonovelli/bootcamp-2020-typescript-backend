## Steps: commands used in the Terminal and configs

### Typescript

- `yarn add typescript -D`
- `yarn tsc --init`
- `yarn add ts-node-dev -D`
  - Alternativa ao Nodemon
- [edit] tsconfig.json

  ```JSON
  {
    "compilerOptions": {
      "outDir": "./dist",
      "rootDir": "./src",
    }
  }
  ```

- [edit] package.json

  ```JSON
  {
    "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev --transpileOnly  --ignore-watch node_modules src/server.ts"
    }
  }
  ```

---

### Express

- `yarn add express`
- `yarn add @types/express -D`
- `yarn add express-async-errors`
  ```
  Para tratar erros em rotas asíncronas
  ```

---

### Eslint

- `yarn add eslint -D`
- `yarn eslint --init`
- `yarn add [sugests]`
- `yarn add eslint-import-resolver-typescript -D`
- `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`


### Typeorm

 - yarn add pg typeorm
 - ormconfig.json
 - yarn add reflect-metadata
 - import 'reflect-metadata'; no primeiro aquivo do app

    #### Typeorm commands examples
    - yarn typeorm migration:run
    - yarn typeorm migration:create -n AddAvatarFieldToUsers

### Bcrypt
yarn add bcryptjs
yarn add @types/bcryptjs -D


### JWT
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D


### Multer para upload de arquivos
yarn add multer
yarn add @types/multer -D


### Cors
yarn add cors
yarn add @types/cors -D


### Importações relativas como modules
  __tsconfig.json__
  ```json
    {
    ///...
    "baseUrl": "./src",                       /* Base directory to resolve non-absolute module names. */
      "paths": {
        "@modules/*": ["modules/*"],
        "@config/*": ["config/*"],
        "@shared/*": ["shared/*"]
      },
      // ...
      }
  ```

  __package.json__
  ```json
    {
    ///...
    "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev -r tsconfig-paths/register --inspect --transpileOnly --ignore node_modules src/shared/infra/http/server.ts",
      "start": "ts-node src/shared/infra/http/index.ts",
      "typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
    }
      // ...
      }
  ```

  `yarn add tsconfig-paths -D `

### Injeção de dependências
  `yarn add tsyringe -D`


# Testes

### Jest
  `yarn add jest -D`
  `yarn add @types/jest -D`
  `yarn add ts-jest -D`
    __jest.config.json__
  ```js
    {
      ///...
      preset: 'ts-jest',
      testMatch: [
        "**/*.spec.ts",
      ],
      // ...
    }
  ```
