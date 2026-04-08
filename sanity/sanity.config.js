import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import product from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'Product Catalog',
  projectId: process.env.SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [product],
  },
})
