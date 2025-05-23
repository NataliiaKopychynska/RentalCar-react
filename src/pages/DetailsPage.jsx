import { useParams } from 'react-router-dom'

function DetailsPage() {
  const { carId } = useParams()
  return <div>{carId}</div>
}

export default DetailsPage
