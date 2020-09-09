import { useRouter } from 'next/router'

export default function Routes() {
  const router = useRouter()

  return (
    <div>
      <a onClick={() => router.push('/')}>Home |</a>
      <a onClick={() => router.push('/puppies')}> All Puppies |</a>
      <a onClick={() => router.push('/litters')}> Litters |</a>
      <a onClick={() => router.push('/info')}> Info |</a>
    </div>
  )
}