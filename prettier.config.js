module.exports = {
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  bracketSameLine: false,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 使用默认的折行标准
  proseWrap: 'always',
  quoteProps: 'preserve',
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 使用 2 个空格缩进
  tabWidth: 2,
  trailingComma: 'es5',
  // 不使用缩进符，而使用空格
  useTabs: false,
  vueIndentScriptAndStyle: false,
  // 一行最多 100 字符
  printWidth: 100,
};
