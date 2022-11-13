/* eslint-disable no-param-reassign */
import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import { storybookSvgDisabled } from '../lib/storybookSvgDisabled';
import { scssLoaders } from '../loaders/scssLoaders';
import { svgLoader } from '../loaders/svgLoader';

interface DefaultConfig {
  config: Configuration;
}

export default ({ config }: DefaultConfig) => {
  const srcPath: string = path.resolve(__dirname, '..', '..', 'src');
  const extensions: string[] = ['.tsx', '.ts'];
  const scssLoader = scssLoaders(true);
  const SVGLoader = svgLoader();

  // Absolute path
  config.resolve?.modules?.push(srcPath);
  config.resolve?.extensions?.push(...extensions);

  // Disabling basic rules for SVG
  if (config.module) {
    config.module.rules = storybookSvgDisabled(config);
  }

  if (config.resolve) {
    config.resolve.modules = [srcPath, 'node_modules'];
  }

  // Svg loader
  config.module?.rules?.push(SVGLoader);

  // SCSS loaders for scss module
  config.module?.rules?.push(scssLoader);

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  );

  return config;
};
