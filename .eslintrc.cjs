module.exports = {
  root: true,
  ignorePatterns: ["dist", "build", "node_modules"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: ["./tsconfig.json", "./src/frontend/tsconfig.json", "./src/backend/tsconfig.json"] },
      plugins: ["@typescript-eslint", "react", "react-hooks"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "react/react-in-jsx-scope": "off"
      }
    }
  ]
};