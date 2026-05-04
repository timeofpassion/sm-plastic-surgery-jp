import EnHomePage from '../en-home'
import EnLatestBlog from '@/components/en/EnLatestBlog'

export default function EnPage() {
  return <EnHomePage latestBlog={<EnLatestBlog />} />
}
