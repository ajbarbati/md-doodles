import { useEffect, useState, Component } from "react"
import sanityClient from "../../client.js"
import urlFor from "../../imageBuilder"
export default function Litter() {
  const [allData, setAll] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "litter"] {
            title,
            "mom": mom->title,
            "momImage": mom->image,
            "dad": dad->title,
            "dadImage": dad->image,
            featured,
            image{
              asset->{
                _id,
                url
              }
            },
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
            },
        }`
      )
      .then((data) => setAll(data))
      .catch(console.error)
  }, [])

  console.log(setAll)
  return (
    <div className="litters">
      <h2>Featured Litters</h2>
      <div>
        {allData &&
          allData.map((data, index) => (
            <span key={index}>
              <img width="100px" src={data.image.asset.url} alt="Family of Testimonial" />
              <span>
                <h2>{data.title}</h2>
                <h3>{data.featured == true ? "Featured" : null}</h3>
                
                <div><img src={urlFor(data.momImage).width(300).url()} alt="Mother of Litter"/><p>Mother: {data.mom}</p></div>
                <div><img src={urlFor(data.dadImage).width(300).url()} alt="Mother of Litter"/><p>Father: {data.dad}</p></div>
                <p>{data.body.en.children.text}</p>
              </span>
            </span>
          ))}
      </div>
    </div>
  )
}
