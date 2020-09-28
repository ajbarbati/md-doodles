import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"

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
    <div className="featuredPups">
      <h2>Pups</h2>
      <div className="featuredPupCards">
        {allData &&
          allData.map((data, index) => (
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
    </div>
  )
}