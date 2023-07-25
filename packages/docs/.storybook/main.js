module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }

    return {
      ...config,
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
      rollupOptions: {
        ...config.rollupOptions,
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      }}
    // return {
    //   ...config,
    //   esbuild: {
    //     ...config.esbuild,
    //     jsxInject: `import React from 'react'`,
    //   },
    //   rollupOptions: {
    //     ...config.rollupOptions,
    //     external: ["react", "react-dom"],
    //     output: {
          
    //       globals: {
    //         react: "React",
    //         "react-dom": "ReactDOM",
    //       },
    //     },
    //   },
    // };
  }
}