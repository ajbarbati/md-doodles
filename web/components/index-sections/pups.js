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
    <div className="pups">
      <h2>Featured Pups</h2>
      <div>
        {allData &&
          allData.map((data, index) => (
            <span key={index}>
              <img src={data.image.asset._ref} alt="" />
              <span>
                <h2>{data.title}</h2>
                <h3>{data.sex}</h3>
                <h4>{data.breedSelect}</h4>
                <h5>{data.breedType}</h5>
                <p>{data.body.en.children.text}</p>
                <p>{data.litter}</p>
              </span>
            </span>
          ))}
      </div>
    </div>
  )
}