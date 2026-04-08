import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import product from './schema/product'

export const studioConfig = defineConfig({
  name: 'catalogue',
  title: 'Catalogue Studio',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/catalogue/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [product],
  },
})
