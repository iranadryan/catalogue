import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export function imageUrl(source) {
  if (!source?.asset?._ref) return null
  const ref = source.asset._ref
  // ref format: image-{id}-{dimensions}-{format}
  const [, id, dimensions, format] = ref.split('-')
  return `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${id}-${dimensions}.${format}`
}
