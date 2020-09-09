import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"

export default function About() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
            title,
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
            },
            title2,
            body2{
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
    <div className="about">
      <h2>About</h2>
      <div>
        {allData &&
          allData.map((data, index) => (
            <span key={index}>
              
              <span>
                <h2>{data.title}</h2>
                <img width="50px" src={data.image.asset.url} alt="Image of Tracie" />
                <p>{data.body.en.children.text}</p>
              </span>
              <div>
                <h2>{data.title2}</h2>
                <p>{data.body2.en.children.text}</p>
              </div>
            </span>
          ))}
      </div>
    </div>
  )
}
