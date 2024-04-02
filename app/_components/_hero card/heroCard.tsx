"use client"



import Image from "next/image";

import { AboutBox } from './style';

const HeroCard = () => {

    return (
        <AboutBox>
            <div className="logo" >
            <Image src="/2ab1e5a9cd055268711b8f35b3a0ee23.png" alt=""
                    layout="fill"
                    objectFit="contain" />
            </div>
           <div className="circlebox">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="newimg">
            <Image src="/fa93148c43452dca55ff4aa2aaa739ed.jpg" alt=""    layout="fill"
                    objectFit="contain" />
            </div>
            
           </div>
                
           <hr />
            <h1>LOREM IPSUM</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>
        </AboutBox>
    );
};

export default HeroCard;