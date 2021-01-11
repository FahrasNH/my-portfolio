import { Dashboard } from '../components/templates'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  if (router.pathname === '/') {
    return <Dashboard router={router} />
  }

  return ''
}
