import { useEffect } from "react"

const Gallery = () => {
  useEffect(() => {
    document.title = "Furniture Gallery"
  })

  return (
    <div>Gallery</div>
  )
}

export default Gallery