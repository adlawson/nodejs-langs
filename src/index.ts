import type { Language } from './data';
import data from './data';

const types = [1, 2, 3, '1', '2', '2B', '2T', '3'] as const;
type Type = (typeof types)[number];

const langs = {
  all,
  has,
  codes,
  names,
  where,
};

export default langs;

export function all(): Language[] {
  return data;
}

export function has(crit: Type, val: string) {
  return void(0) !== where(crit, val);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function codes(type: any) {
  if (isValidType(type)) {
    return forAll(data, function getCodesIterator(row) {
      return row[type];
    });
  }
}

export function names(local: boolean) {
  return forAll(data, function getNamesIterator(row) {
    return local ? row.local : row.name;
  });
}

export function where(crit: Type, val: string) {
  for (let i = 0; i < data.length; i++) {
    if (val === data[i][crit]) {
      return data[i];
    }
  }
}

function forAll<T>(arr: Language[], fn: (lang: Language, index?: number) => T) {
  const out: T[] = [];
  let i: number;
  for (i = 0; i < arr.length; i++) {
    out.push(fn(arr[i], i));
  }

  return out;
}

function isValidType(type: unknown): type is Type {
  return -1 !== types.indexOf(type as Type);
}
