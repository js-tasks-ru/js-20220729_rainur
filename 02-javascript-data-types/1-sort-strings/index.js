/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const typeSortObj = {
    asc: 1,
    desc: -1,
  };

  const typeSort = typeSortObj[param];

  const sortArray = [...arr].sort((a, b) => typeSort * a.localeCompare(b, undefined, { caseFirst: 'upper'}));
  return sortArray;
}
