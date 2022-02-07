import { useEffect } from 'react'
const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>this is daashboard page</h1>
    </div>
  )
}

export default Dashboard
