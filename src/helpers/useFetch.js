import {useState, useEffect} from 'react'

function useFetch(url) {
	const [data, setData] = useState([])

	useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Promise.reject('Something wrong!')
        } else {
          return res.json()
        }
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
	}, [])

	return [data, setData]
}

export default useFetch