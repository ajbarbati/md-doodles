import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"

export default function Testimonials() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"] {
            title,
            featured,
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
    <div className="testimonials">
      <h2>Featured Testimonials</h2>
      <div>
        {allData &&
          allData.map((data, index) => (
            <span key={index}>
              <img width="50px" src={data.image.asset.url} alt="Family of Testimonial" />
              <span>
                <h2>{data.title}</h2>
                <h3>{data.featured == true ? "Featured" : null}</h3>
                <p>{data.body.en.children.text}</p>
              </span>
            </span>
          ))}
      </div>
    </div>
  )
}
