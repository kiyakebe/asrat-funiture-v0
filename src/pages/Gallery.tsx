import { useEffect } from "react"
import FurnitureGallery from '../components/Gallery/Gallery'

const Gallery = () => {
  useEffect(() => {
    document.title = "Furniture Gallery"
  })

  return (
    <FurnitureGallery />
    // <h1>fdsjk</h1>
  )
}

export default Gallery