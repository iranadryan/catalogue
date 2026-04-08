import { Studio } from 'sanity'
import { studioConfig } from './studioConfig'

export default function StudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={studioConfig} />
    </div>
  )
}
