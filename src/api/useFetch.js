import {useState} from 'react'

export const useFetch = (requestFunction, ...params) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const getData = async () => {
        setLoading(true)
        try {
          const response = await requestFunction(...params)
          if (response.ok) {
            const data = response.data.map((notice) => ({ ...notice }))
            if(process.env.NODE_ENV==="development"){
                console.log(data)
            }
            setData(data)
          } else {
            setData([])
          }
        } catch (error) {
            setData([])
            throw error
        } finally {
          setLoading(false)
        }
      }
      return {response: {data, isLoading}, getData}
}

export default useFetch
