import React  from 'react'

const CarouselSlide = (props) => {
    
const {id,slideTitle,slideDescription,slideBg,slideLogo,slideemailicon,slidepasswordicon}=props
    return(
        
<div className='slideWrap' style= {{backgroundImage: `url(${slideBg})`}}>
        <div className='textWrap'>
            <h2> {slideTitle} </h2>
            <p> {slideDescription} </p>
            
        </div>
        
            

        <div className="main" >
            <div className="sub-main">
                <div>
                        <div className="imgs">
                                <div className="container-image">
                                    <img src={slideLogo} alt="profile" className="profile"/>
                                </div>
                        </div>
                        <div>
                            <h1>Iniciar Sesion</h1>
                            <div>
                                <img src={slideemailicon} alt="email" className="email"/>
                                <input type="text" placeholder="user name" className="name"/>
                            </div>
                            <div className="second-input">
                                <img src= {slidepasswordicon} alt="pass" className="email"/>
                                <input type="password" placeholder="user name" className="name"/>
                            </div>
                            <div className="login-button">
                            <a href="/" className='btn'>Iniciar</a> 
                                  {/*  <button>Login</button>*/}
                            </div>
                            
                            <p className="link">                             
                            <a href="*" className='btn'>Olvido su contraseña?</a>                           
                    
                            </p>                                  
                        </div>
                </div>
            </div>
        </div>
</div>

        


    )
}
export default CarouselSlide