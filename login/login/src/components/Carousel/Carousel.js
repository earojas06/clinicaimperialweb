import React ,{ useState,useEffect,useCallback } from 'react'
import { client } from '../../client'
import  CarouselSlide  from '../Carousel/CarouselSlide'

import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{ Navigation } from 'swiper'
import 'swiper'
//import 'swiper/components/Navigation/Navigation.scss'


SwiperCore.use([Navigation])

const Carousel = () => {
    const [isCarouselLoading,setIsCarouselLoading]= useState(false)
    const [carouselSlides,setcarouselSlides] =useState([])

    const cleanUpCarouselSlides =  useCallback( (rawData)=> {
        const cleanSlides = rawData.map((slide) =>{
                const {sys,fields}=slide
                const {id}=sys
                const slideTitle = fields.titulo
                const slideDescription = fields.descripcion
                const slideBg = fields.imagen.fields.file.url 
                const slideLogo = fields.logo.fields.file.url
                const slideemailicon =fields.emailicon.fields.file.url
                const slidepasswordicon=fields.passwordicon.fields.file.url
                const updateSlide ={id,slideTitle,slideDescription,slideBg,slideLogo,slideemailicon,slidepasswordicon}
                return updateSlide
        })

        setcarouselSlides(cleanSlides)
    },[])


  const  getCarouselSlides = useCallback( async () => {
    setIsCarouselLoading(true)
    try {
        const response = await  client.getEntries({ content_type :'clinicaimperialweb' })
        const responseData = response.items
       // console.log(responseData)
        if (responseData) {
            cleanUpCarouselSlides(responseData)
        }else{
            setcarouselSlides ([])
        }
        setIsCarouselLoading(false)
    } catch (error) {
        console.log(error)
        setIsCarouselLoading(false)
    }
},[cleanUpCarouselSlides])

    useEffect(() => {
        getCarouselSlides()
    },[getCarouselSlides] )

    console.log(carouselSlides)
    if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
        return null
    }

    return(
        <div className='carousel'>
            <Swiper navigation>
                {carouselSlides.map((item) => {
                    const {id,slideBg,slideTitle,slideDescription,slideLogo,slideemailicon,slidepasswordicon}=item
                    return(
                        <SwiperSlide key={id}>
                              <CarouselSlide key={id} slideTitle={slideTitle} slideDescription={slideDescription}
                        slideBg={slideBg} slideLogo= {slideLogo} slideemailicon={slideemailicon} slidepasswordicon={slidepasswordicon} />

                        </SwiperSlide>
                     
                    )

                })}
            </Swiper>
        </div> 

    )
}

export default Carousel