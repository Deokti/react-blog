/* eslint-disable max-len */
import { Configuration } from 'webpack';

export function storybookSvgDisabled(config: Configuration) {
  return config?.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
}
