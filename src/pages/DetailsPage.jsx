import { useParams } from 'react-router-dom'
import s from './Page.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarById } from '../redux/operations'
import DetailsTitle from '../components/DetailsComponents/DetailsTitle'
import FormSection from '../components/DetailsComponents/FormSection'
import { BeatLoader } from 'react-spinners'
import ButtonLink from '../components/baseUI/Button/ButtonLink'

function DetailsPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const carDetails = useSelector((state) => state.carID.currentCar)
  const isLoading = useSelector((state) => state.carID.isLoading)

  useEffect(() => {
    dispatch(getCarById(id))
  }, [dispatch, id])

  // console.log(carDetails)
  if (!carDetails) {
    return <p>Loading...</p>
  }

  return (
    <div className={s.containerDetails}>
      {isLoading ? (
        <div className={s.loaderWrapper}>
          <BeatLoader color="#36d7b7" size={12} />
        </div>
      ) : carDetails ? (
        <>
          <img className={s.imgCar} src={carDetails.img} alt="Car" />

          <section className={s.sectionTitle}>
            <DetailsTitle dataCar={carDetails} />
          </section>
          <section className={s.sectionForm}>
            <FormSection />
          </section>
        </>
      ) : (
        <p>Car not found.</p>
      )}
    </div>
  )
}

export default DetailsPage
