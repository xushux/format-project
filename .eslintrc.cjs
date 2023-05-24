module.exports = {
  env: {
    node: true, // 标志当前的环境，不然使用module.exports 会报错
    es2021: true
  },
  extends: [
    'eslint:recommended', // 使用eslint推荐的语法规范
    'plugin:react/recommended', // react推荐的语法规范
    'plugin:@typescript-eslint/recommended', // ts推荐的语法规范
    'prettier', // prettier
    'plugin:prettier/recommended' // prettier推荐的配置
  ],
  parser: '@typescript-eslint/parser', // 使用解析器来解析ts的代码，使得eslint可以规范ts的代码
  parserOptions: {
    ecmaFeatures: {
      jsx: true // 允许使用jsx的语法
    },
    ecmaVersion: 'latest', // es的版本为最新版本
    sourceType: 'module' // 代码的模块化方式，使用module的模块方式
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'], // 使用对应的react, react-hooks, @typescript-eslint 等插件
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        tabWidth: 2,
        printWidth: 120
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
