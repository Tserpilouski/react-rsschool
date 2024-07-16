export function getNavigatedUrl(searchParams: URLSearchParams, id: string) {
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';
  return `${id}/?page=${page}&search=${search}`;
}
