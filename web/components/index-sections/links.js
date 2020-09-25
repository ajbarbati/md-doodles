import { useRouter } from 'next/router'

const Links = () => {
    
  const router = useRouter()
    return (
      <div className="links">
          <div className="breedL">
                <div>
                    <img src="https://via.placeholder.com/50?text=G"></img>
                    <h3>Golden Doodles</h3>
                </div>
                <div>
                    <img src="https://via.placeholder.com/50?text=S"></img>
                    <h3>Sheepa Doodles</h3>
                </div>
                <div>
                    <img src="https://via.placeholder.com/50?text=B"></img>
                    <h3>Berne Doodles</h3>
                </div>
          </div>
          <div className="litterL">
              <div>
                  <a onClick={() => router.push('/litters')}>
                    <h3 className="litterLink">See our current litters!</h3>
                  </a>
              </div>
              <div>
                  <a onClick={() => router.push('/puppies')}>
                      <button className="allPLink">See All Pups!</button>
                  </a>
              </div>
          </div>
      </div>
    )
  }
  
  export default Links