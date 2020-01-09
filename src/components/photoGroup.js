import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'



function PhotoGroup() {
  const [space, setSpace] = useState('')

  useEffect(() => {
    axios.get(
        'https://api.nasa.gov/planetary/apod?api_key=Lvb6aTSRkqDh53DnSH55V2ME4pup3YKB5miyL8Xx'
      )
      .then(resp => {
        console.log(resp.data)
        setSpace(resp.data)
      })
      .catch(err => {
        console.log('there was an error getting the picture of thr day', err)
      })
  }, [])

  return (
    <div className="PhotoGroup">
      <Card
        title={space.title}
        imgUrl={space.hdurl}
        date={space.date}
        explain={space.explanation}
      />
    </div>
  )
}

export default PhotoGroup