export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    title: '品果-智能云中心-组件库',
    themeConfig: { mode: 'light' },
    // base: '/pinguo-web-ui',
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
  lessInRollupMode: {},
  runtimeHelpers: true,
};
