import { isArray } from './object';

export const isContained = (parent: any[], child: any[]) => {
  if (!isArray(parent) || !isArray(child) || parent.length < child.length) {
    return false;
  }
  for (const item of child) {
    if (!parent.includes(item)) {
      return false;
    }
  }
  return true;
}
