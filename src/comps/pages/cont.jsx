import './cont.css'
import mail from '../../img/gmail.png'
import linked from '../..//img/linkedin.png'
import ints from '../../img/instagram.png'
import git from '../../img/github.png'
export default function Cont(){
    return(
        <>

        <div id='con_main'>
       
                    
          <ol className='uul'>
        <h1 id='con_nav'>Contact Me-></h1>
                    <li> <a href="mailto:rahulrajancc@gmail.com"><img src={mail} alt="" srcset=""  className='com_pic'/></a></li>
                    <li><a href="https://www.linkedin.com/in/rahulrajancc/"><img src={linked} className='com_pic'></img></a></li>
                    <li><a href="http://"> <img src={git} alt="" srcset=""  className='com_pic'/></a></li>
                    <li><a href="http://"><img src={ints} className='com_pic'></img></a></li>
                </ol>
                </div>
        </>
    )


}