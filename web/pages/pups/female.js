import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"
import Header from '../../components/header'
import Routes from '../../components/routes'
import Footer from '../../components/footer'
export default function Pups() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "puppy"] {
            title,
            sex,
            breedSelect,
            breedType,
            available,
            "litter": litter->title,
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
			      },
            image{
              asset->{
                _id,
                url
              }
            }
        }`
      )
      .then((data) => setAll(data))
      .catch(console.error)
  }, [])

  console.log(setAll)
  return (

    <div className="pupPage">
      <Header/>
      <h2>Female Pups</h2>
      <Routes/>
      <div className="featuredPupCards">
        {allData &&
          allData.filter((data) => data.sex == "Female").map((data, index) => (
            <div className="pupCard" key={index}>
              <img src={data.image.asset.url} alt="" />
              <div>
                <h3 className="name">{data.title}</h3>       
                <h3 className="available" style={{color: data.available == !true ? 'green' : "red"}}>{data.available == !true ? "AVAILABLE" : "SOLD"}</h3>
                <h4 className="sex">{data.sex}</h4>
                <h4 className="breed">{data.breedSelect}</h4>
                <h5 className="breedType">{data.breedType}</h5>
              </div>
            </div>
          ))}
      </div>
      <Footer/>
    </div>
  )
}