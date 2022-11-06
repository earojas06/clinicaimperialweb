import React ,{ useState,useEffect,useCallback } from 'react'
import { client } from '../../client'
import  CarouselSlide  from '../Carousel/CarouselSlide'



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
                const updateSlide ={id,slideTitle,slideDescription,slideBg}
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

    return(
        <div>
                {carouselSlides.map((item) => {
                    const {id,slideBg,slideTitle,slideDescription}=item
                    return(
                       <CarouselSlide key={id} slideTitle={slideTitle} slideDescription={slideDescription}
                        slideBg={slideBg} />

                    )

                })}
        </div> 

    )
}

export default Carousel