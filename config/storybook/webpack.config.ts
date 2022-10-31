import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { storybookSvgDisabled } from '../lib/StorybookSvgDisabled';
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
  config.module.rules = storybookSvgDisabled(config);

  // Svg loader
  config.module?.rules?.push(SVGLoader);

  // SCSS loaders for scss module
  config.module?.rules?.push(scssLoader);

  return config;
};