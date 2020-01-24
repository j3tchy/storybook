module.exports = {
  stories: [
    '../src/stories/Introduction.stories.mdx',
    '../src/stories/**/**/*.(js|mdx)',
    '../src/**/*.stories.(js|mdx)'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      }
    }
  ],
};


