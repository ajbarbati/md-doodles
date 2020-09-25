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
    <div className="faq">
      <h2>Still got questions?</h2>
      <div className="faqs">
        {allData &&
          allData.map((data, index) => (
            <div key={index} className="faqWrap">=
              <h2>{data.title}</h2>
              <p>{data.description}</p>=
            </div>
          ))}
      </div>
    </div>
  )
}