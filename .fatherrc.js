export default {
  entry: 'src/index.ts',
  esm: "rollup",
  cjs: "rollup",
  // umd: {
  //   name: 'pinguo-ui',
  //   minFile: false,
  //   sourcemap: true,
  //   globals: {
  //     react: 'React',
  //   },
  // },
  doc: {
    title: '品果-智能云中心-组件库',
    themeConfig: { mode: 'light' },
    base: '/pinguo-web-ui',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
