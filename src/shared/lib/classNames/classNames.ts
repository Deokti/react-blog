export type Mods = Record<string, boolean | string>;

export const cn = (
  className: string,
  mods?: Mods | string[],
  additional?: string[],
): string => {
  const clx: string[] = [className];

  const isMods = typeof mods !== 'undefined';
  const isAdditional = typeof additional !== 'undefined';

  if (isMods) {
    const modsObject = Array.isArray(mods)
      ? mods
      : Object.entries(mods)
        .filter(([_, value]) => value === true)
        .map(([value]) => value);

    clx.push(...modsObject);
  }

  if (isAdditional) clx.push(...additional);

  return clx.join(' ');
};
