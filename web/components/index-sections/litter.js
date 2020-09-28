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
            breedSelect,
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
      <div className="litterGrid">
        {allData &&
          allData.map((data, index) => (
            <div className="litterWrap" key={index}>
              <div className="Mother">
                <img src={urlFor(data.momImage).width(300).url()} alt="Mother of Litter"/>
                <p>Mother: {data.mom}</p>
                <h4 className="breed">{data.breedSelect}</h4>
              </div>
              <div className="litterInfo">
                <img width="100px" src={data.image.asset.url} alt="A litter of puppies" />
                <h2>{data.title}</h2>               
                <p>{data.body.en.children.text}</p>
              </div>
              <div  className="Father">
                <img src={urlFor(data.dadImage).width(300).url()} alt="Mother of Litter"/>
                <p>Father: {data.dad}</p>
                <h4 className="breed">{data.breedSelect}</h4>
              </div> 
            </div>
          ))}
      </div>
    </div>
  )
}
