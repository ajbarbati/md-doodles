import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"

export default function Testimonials() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faq"] {
            title,
            description,
        }`
      )
      .then((data) => setAll(data))
      .catch(console.error)
  }, [])

  console.log(setAll)
  return (
    <div className="testimonials">
      <h2>Featured FAQ</h2>
      <div>
        {allData &&
          allData.map((data, index) => (
            <span key={index}>
              <span>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </span>
            </span>
          ))}
      </div>
    </div>
  )
}