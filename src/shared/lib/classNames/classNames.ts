export type Mods = Record<string, boolean | string | undefined>;

type Aditional = Array<string | undefined>;

export const cn = (className: string, mods?: Mods | Aditional, additional?: Aditional): string => {
  const clx: Aditional = [className];

  const isMods = typeof mods !== 'undefined';
  const isAdditional = typeof additional !== 'undefined';

  if (isMods) {
    const modsObject = Array.isArray(mods)
      ? mods.filter(Boolean)
      : Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value === true)
        .map(([value]) => value.trim());

    clx.push(...modsObject);
  }

  if (isAdditional) {
    const filter = additional.filter(Boolean);
    clx.push(...filter);
  }

  return clx.join(' ');
};
