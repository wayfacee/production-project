// 1) key 2) value
type Mods = Record<string, boolean | string>;

// cls - main class
// mods - 1) ключ - назв. 2) знач. - boolean
// additional[]
export function classNames(cls: string, mods: Mods, additional: string[]):string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
    .filter(([classNames, value]) => Boolean(true))
    .map(([className, value]) => className)
  ]
  .join(' ');
}

// classNames('remove-btn', {hovered: true, selectable: false, red: true}, ['pdg'])