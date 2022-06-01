# Sample project structure:
```
.
├── src
│   ├── index.js
│   ├── [other files & folders]
├── node_modules
│   ├── [folders with dependencies]
├── README.md
├── package.json
├── .prettierrc
└── .eslintrc.json
```

contents:
- `src` directory will contain our application code
- `node_modules`: will hold packages installed by yarn. Can get very large. **should be added to .gitignore file** so that it isn't uploaded to github
  - This is similar to virtual environment in Python
- `package.json` file will contain info about the project including the dependencies (libraries required) and scripts to run the app.
-  (optional) `.prettierrc` file will contain information about how the Prettier plugin will format our code
-  `.eslintrc.json` file will contain info about the linting rules. Essentially they tell the Eslint plugin in VS Code what code style rules to enforce.