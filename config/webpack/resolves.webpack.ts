import { ResolveOptions } from 'webpack';
import { BuildOptions } from './interfaces/config.interface';

export function webpackResolve(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
