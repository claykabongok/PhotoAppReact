import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useImageRequest(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  

  useEffect(() => {
    setImages([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancelRequest
    const api = "https://pixabay.com/api/";
    const key = process.env.REACT_APP_ACCESSKEY;
   
    axios({
     
    

      method: 'GET',
      url: `${api}?key=${key}&image_type=photo&per_page=100`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancelRequest = c)
    }).then(res => {
      setImages(previousImages => {
     
        return [...previousImages, ...res.data.hits]
      })
     
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancelRequest()
  }, [query, pageNumber])

  return { loading, error, images }
}
