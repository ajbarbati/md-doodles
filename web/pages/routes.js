import { useRouter } from 'next/router'

export default function Routes() {
  const router = useRouter()

  return (
    <div className="routes">
      
      <a onClick={() => router.push('/')}><img src="https://via.placeholder.com/50?text=LOGO"></img></a>
      <a onClick={() => router.push('/puppies')}> All Puppies</a>
      <a onClick={() => router.push('/litters')}> Litters</a>
      <a onClick={() => router.push('/info')}> Info</a>
    </div>
  )
}