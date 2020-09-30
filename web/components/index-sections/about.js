import { useEffect, useState} from "react"
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
  return (
    <div className="about">
        {allData &&
          allData.map((data, index) => (
            <div key={index} className="aboutWrap">
              <div className="row1">
                <div>
                    <img src={data.image.asset.url} alt="Image of Tracie" />
                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.body.en.children.text}</p>
                  </div>
                </div>
                <div>
                  <h2>Who we are!</h2>
                </div>
              </div>
              <div className="row2">
                <div>
                  </div>
                <div>
                  <div>
                    <h3>{data.title2}</h3>
                    <p>{data.body2.en.children.text}</p>
                  </div>
                  <img src={data.image.asset.url} alt="Image of Tracie" />
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}
