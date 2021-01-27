import cacheData from 'memory-cache';

export default async function fetchDataWithCache(url, options) {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const minutes = 1;
    const res = await fetch(url, options);
    const data = await res.json();
    cacheData.put(url, data, minutes * 1000 * 60);
    return data;
  }
}
