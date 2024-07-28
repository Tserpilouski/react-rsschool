import { PersonInfo } from '../service/type.type';

export const downloadCsv = (array: PersonInfo[]) => {
  if (!array.length) {
    return { url: '', fileName: '' };
  }
  const headers = Object.keys(array[0]) as (keyof PersonInfo)[];
  const csvContent = [
    headers.join(','),
    ...array.map((row) =>
      headers
        .map((fieldName) => {
          let cell = row[fieldName];
          if (typeof cell === 'object') {
            cell = Object.entries(cell)
              .map(([key, value]) => `${key}: ${value}`)
              .join('; ');
          }
          return `"${(cell || '').toString().replace(/"/g, '""')}"`;
        })
        .join(',')
    ),
  ].join('\n');

  const fileName = `${array.length}_star_wars_api.csv`;
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  return { url, fileName };
};
