import { useEffect, useState} from "react"
import sanityClient from "../../client.js"


export default function Info () {
    const [allData, setAll] = useState(null)

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "info"] {
              title,
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
    return (
        <div className="infoPage">
            <h1>Additional Info</h1>
            <div className="infoBWrap">
                {allData &&
                    allData.map((data, index) => (
                <div className="infoBlock">
                    <img src={data.image.asset.url} alt={"Image of:"+ data.title} />
                    <h3>{data.title}</h3>
                    <p>{data.body.en.children.text}</p>
                </div>
                ))}
            </div>
        </div>
    )
}
