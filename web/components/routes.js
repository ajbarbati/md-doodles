import { useRouter } from 'next/router'

export default function Routes() {
  const router = useRouter()

  return (
    <div className="pup-routes">
      <a onClick={() => router.push('/puppies')}> All Puppies</a>
      <a onClick={() => router.push('/pups/sheepa-doodle')}> Sheepa Doodle</a>
      <a onClick={() => router.push('/pups/berne-doodle')}> Berne Doodle</a>
      <a onClick={() => router.push('/pups/golden-doodle')}> Golden Doodle</a>
      <a onClick={() => router.push('/pups/female')}> Female</a>
      <a onClick={() => router.push('/pups/male')}> Male</a>
      <a onClick={() => router.push('/pups/mini')}> Mini</a>
      <a onClick={() => router.push('/pups/standard')}> Standard</a>
    </div>
  )
}