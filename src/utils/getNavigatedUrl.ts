export function getNavigatedUrl(searchParams: URLSearchParams, id: string) {
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';

  let url = `${id}/?page=${page}`;
  if (search) {
    url += `&search=${search}`;
  }

  return url;
}
