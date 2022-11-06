import React  from 'react'


const CarouselSlide = (props) => {
    
const {id,slideTitle,slideDescription,slideBg}=props
    return(
        
        <div className='slideWrap' style= {{backgroundImage: `url(${slideBg})`}}>
            <div className='textwrap'>

                <h2> {slideTitle} </h2>
                <p> {slideDescription} </p>

            </div>
        </div>


    )
}

export default CarouselSlide