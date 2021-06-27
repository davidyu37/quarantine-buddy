import useSWR from 'swr'

function fetcher(url) {
  return window.fetch(url).then((res) => res.json())
}

export function useTopics() {
  const { data, error } = useSWR(`/api/topics/all`, fetcher)

  return {
    topics: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}
