import { useParams } from 'react-router-dom'
import s from './Page.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarById } from '../redux/operations'
import DetailsTitle from '../components/DetailsComponents/DetailsTitle'
import FormSection from '../components/DetailsComponents/FormSection'

function DetailsPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const carDetails = useSelector((state) => state.carID.currentCar)

  useEffect(() => {
    dispatch(getCarById(id))
  }, [dispatch, id])

  console.log(carDetails)
  if (!carDetails) {
    return <p>Loading...</p>
  }

  return (
    <div className={s.containerDetails}>
      <section>
        <img className={s.imgCar} src={carDetails.img} />
      </section>
      <section className={s.sectionTitle}>
        <DetailsTitle dataCar={carDetails} />
      </section>
      <section className={s.sectionForm}>
        <FormSection />
      </section>
    </div>
  )
}

export default DetailsPage
