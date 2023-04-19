module.exports = {
  base: '/vuepress-plugin-component-demo/',
  title: 'vuepress-plugin-component-demo',
  description: 'Vuepress component demo block in markdown.',
  plugins: [require('../lib/cjs')],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'yujinpan/vuepress-plugin-component-demo',
    logo: '/logo.svg',
    sidebar: 'auto',
    nav: [{ text: 'Guide', link: '/' }],
  },
};
