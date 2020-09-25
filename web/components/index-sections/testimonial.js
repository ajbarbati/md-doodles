import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"

export default function Testimonials() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial" && featured == true][0..2] {
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
    <div className="testimonial">
      <h2>What our customers are saying!</h2>
      <div className="testimonialsWrap" >
        <div className="testimonials">
        {allData &&
          allData.map((data, index) => (
            <div key={index} className="testCard">
              <img  src={data.image.asset.url} alt="Family of Testimonial" />
              
              <h3>{data.title}</h3>
              <p>{data.body.en.children.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
