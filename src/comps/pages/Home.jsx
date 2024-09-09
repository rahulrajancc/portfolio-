import { useEffect, useState } from 'react';
import './Home.css'
import Leet from '../../img/leetc .png'
import github_pi from '../../img/1_biIy42Cn4Bnu0IkpUW1Zew.png'


const Homes = () => {
    let i=0;
    
    const [easySolved, setEasySolved] = useState(0);
    const [MSolved, setMSolved] = useState(0);
    const [HSolved, setHSolved] = useState(0);
    const [Rank, setrank] = useState(0);
    const [totalSolved, settotalSolved] = useState(0);
    const [github, setgithub]=useState('0');

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('https://leetcode-stats-api.herokuapp.com/rahulr123')
            .then(response => response.json())
            .then(data => {
                // Assuming data.HardSolved is a number or can be converted to a number
                setEasySolved(data.easySolved || 0);
                setMSolved(data.mediumSolved || 0);
                setHSolved(data.HardSolved || 0);
                setrank(data.ranking || 0);
                settotalSolved(data.totalSolved || 0);
                
            })
            .catch(error => console.error('Error:', error));

            const token='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';
            fetch('https://api.github.com/users/rahulrajancc/repos',{
                method:'GET',
                headers:{
                    'Authorization':`token ${token}`,
                    'Accept':'application/vnd.github.v3+json',

                   
                    
                }
            }
                
            )
            .then(response => response.json())
            .then(data => {
                for( i;i<=8;i++){

                    console.log(data[i].name);
                    const newa=document.createElement('ul');
                   const gi_list=document.getElementById('lii');
                   gi_list.appendChild(newa);
                   newa.innerHTML=`<li>${i+1}: ${data[i].name}</li>`;
                }
               
               
               
            })
            .catch(error => console.error('Error:', error));
    

            
    }, []); 




    

    return (
        <div id="home_c">

               <marquee> <h1 id='Home_nav'>I'm a passionate Software/Web Developer</h1></marquee><br/>
                <h3>
                    Welcome to my portfolio--{'>>'}Take a look at my projects and learn more about me
                </h3><br/>
            
            <div className="home_contents">
         
                

                
            <div className="tabs">
                <img src={Leet} alt="" srcset="" className='home_icon'/>
                <h3>Ranking:{Rank}</h3>
                <h3>TotalSolved:{totalSolved}</h3>
                <ul>
                    <li>Easy Solved:{easySolved}</li>
                    <li>Medium Solved:{MSolved}</li>
                    <li>Hard Solved:{HSolved}</li>
                </ul>

            </div>
               <div className="tabs">
                <img src={github_pi} alt="" srcset="" className='home_icon' />
                <h3>My Recent Project </h3>
                <div id ='lii'>
                    
                </div>
                </div>
               </div>
               
        </div>
    );
    
}

export default Homes;