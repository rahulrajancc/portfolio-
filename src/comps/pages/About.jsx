import './About.css'
import pic_ from '../../img/1724655739919.png'
export default function About(){
    return(
        <div id="About_main">
            
            <h1 id='About_nav'>About me</h1>
            <div className='about_section'>

            <img src={pic_} alt="" srcset="" />
            <p>My name is Rahul Rajan Hills from Kerala, 
                currently pursuing a BTech in Computer Science 
                and Engineering at Mangalam College of Engineering.
                 I have a strong foundation in programming languages
                  such as JavaScript, C/C++, Python, and Bash, alongside 
                  expertise in web development with HTML, CSS, React,
                   and Node.js. My skills extend to database management
                    with SQL, MySQL, and MongoDB, and I am proficient
                     in software development using React Native, Git,
                      and GitHub. I am comfortable working with various 
                      operating systems including Linux, Windows, and
                       Android. My soft skills include problem-solving,
                        time management, and adaptability, and I am 
                        fluent in English, Hindi, and Malayalam.

            </p>
        
        
            </div>
        </div>
    )
}