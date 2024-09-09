import "./tabar.css"
import P_pic from '../img/1724655739919.png'
import home from '../img/home.png'
import Abo from "../img/id-card.png"
import project from "../img/project-management.png"
import exp from '../img/quality.png'
import con from '../img/customer-service.png'
import { useEffect } from "react"

const Tabar=()=>{
    useEffect(()=>{

    })

    return(<>
        <div className="Tabbar_1">
            
            <img src={P_pic} alt="" srcset="" />
            <h3 className="Header">Hey i'm Rahul Rajan</h3>
            <ul id="nav_list">
                <li><a href="#Home_nav"><img src={home} alt="" srcset=""  className="Tab_icon"/>Home</a></li>
                <li> <a href="#About_nav"> <img src={Abo} alt="" srcset=""  className="Tab_icon"/>About Me</a></li>
                <li><a href="#Pro_nav"><img src={project} alt="" srcset=""  className="Tab_icon"/>Projects</a></li>
                <li><a href="#Exp_nav"><img src={exp} alt="" srcset="" className="Tab_icon" />Experiences</a></li>
                <li> <a href="#con_nav"><img src={con} alt="" srcset="" className="Tab_icon" />Contact</a></li>
            </ul><hr/>
            

        </div>
     
        </>
        
    )
    
}


export default Tabar;