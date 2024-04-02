"use client"

import { Loadbox } from "./style"


import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
/* import ReactFlow, { ReactFlowProvider } from 'reactflow'; */
/* import 'reactflow/dist/style.css'; */

import Image from "next/image";



const BodyThree = () => {
    /*  const CustomNode1 = ({ data }) => (
         <div style={{ width: '500px', height: '500px', backgroundColor: 'red', borderRadius: "50%",  backgroundImage: "url(../../../public/82b52388d2418b4c76480d7e6fc35ca3.jpg)"  }}>
           {data.label}
         </div>
       );
       
       const CustomNode2 = ({ data }) => (
         <div style={{ width: '150px', height: '150px', borderRadius: "50%" }}>
           {data.label}
         </div>
       );
       const CustomNode3 = ({ data }) => (
         <div style={{ width: '350px', height: '350px', borderRadius: "50%" }}>
           {data.label}
         </div>
       );
       const CustomNode4 = ({ data }) => (
         <div style={{ width: '150px', height: '150px', borderRadius: "50%" }}>
           {data.label}
         </div>
       );
       const CustomNode5 = ({ data }) => (
         <div style={{ width: '150px', height: '150px', borderRadius: "50%" }}>
           {data.label}
         </div>
       );
       
       const initialNodes = [
         { id: '1', type: 'custom1', position: { x: 350, y: 50 }, data: { label: 'Node 1' } },
         { id: '2', type: 'custom2', position: { x: 250, y: 450 }, data: { label: 'Node 2' } },
         { id: '3', type: 'custom3', position: { x: 750, y: 550 }, data: { label: 'Node 3' } },
         { id: '4', type: 'custom4', position: { x: 750, y: 950 }, data: { label: 'Node 4' } },
         { id: '5', type: 'custom5', position: { x: 1050, y: 970 }, data: { label: 'Node 5' } },
       ];
       
      
       
       const nodeTypes = {
         custom1: CustomNode1,
         custom2: CustomNode2,
         custom3: CustomNode3,
         custom4: CustomNode4,
         custom5: CustomNode5,
       };
        */

    /* 
        const initialEdges = [
            { id: 'e1-2', source: '1', target: '2' },
            { id: 'e2-3', source: '2', target: '3' },
            { id: 'e3-1', source: '3', target: '1' },
        ]; */




    return (

        <Loadbox className="loader">
            <hr />
            <div className="imgs">
                <div className="map">
                <Image src="/59586d100a3d4891935025d1060e1f44.png" alt=""   layout="fill"
                    objectFit="cover"/>
                </div>

                <div className="boxOne">
                    <h2>Atmosfera</h2>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti quasi, asperiores odit blanditiis voluptatibus
                        dolorum.
                    </p>
                </div>
            </div>
            <div className="imgs">
                <div>
                    <h2> Clube De Vantagens</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti quasi, asperiores odit blanditiis voluptatibus
                        dolorum.
                    </p>
                </div>
                <div className="diamond">
                <Image src="/a8351b5c61cd1a273489a21a66e116c2.png" alt=""   layout="fill"
                    objectFit="contain"/>
                </div>
            </div>

            <hr />
            <h1>LOREM IPSUM</h1>

            <p className="pboxagain">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>

            <div className="screens">
                <div className="children">
                    <h1> Antes da <span>Kosmo</span></h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="print one">
                    <Image src="/97cc4c7999f14ef53373691ed526de39.png" alt=""   layout="fill"
                    objectFit="contain"/>
                    </div>
                </div>
                <div className="icon">
                    <p ><FcGoogle /></p>
                </div>
                <div className="children">
                    <h1> Depois da <span>Kosmo</span></h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="print two">
                    <Image  src="/88fa7029b1a51e90f269fecc4860d966.png" alt=""   layout="fill"
                    objectFit="contain"/>
                    </div>
                </div>
            </div>
            <div className="screens">
                <div className="children">
                    <h1> Antes da <span>Kosmo</span></h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="print three">
                    <Image  src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt=""   layout="fill"
                    objectFit="contain"/>
                    </div>
                </div>
                <div className="icon">
                    <p ><FaMeta /></p>
                </div>
                <div className="children">
                    <h1> Depois da <span>Kosmo</span></h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="print four">
                    <Image  src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt=""   layout="fill"
                    objectFit="contain" />
                    </div>
                </div>
            </div>
            <hr />
            <h1>LOREM IPSUM</h1>

            <p className="pboxagain">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>
            {/*     <ReactFlowProvider>
      <div style={{ width: '100%', height: '150vh' }}>
      <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          draggable={false}
          pannable={false} // Impede o arrastar
          zoomable={false} // Impede o zoom
        />
      </div>
    </ReactFlowProvider>
 */}

            <div className="circleBox">
                <div className="circleOne"></div>
                <div className="circleTwo"></div>
                <div className="circleThree"></div>
                <div className="circleFour"></div>
                <div className="circleFive"></div>
                <div className="barOne" ></div>
                <div className="barTwo" ></div>
                <div className="barThree"></div>
                <div className="barFour" ></div>
            </div>

            <hr />
            <h1>LOREM IPSUM</h1>

            <p className="pboxagain">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>

            <div className="ballBox">
                <div className="bigball"></div>
                <div className="ball one"></div>
                <div className="ball two"></div>
                <div className="ball three"></div>
                <div className="ball four"></div>
                <div className="ball five"></div>
                <div className="ball six"></div>

            </div>

          

        </Loadbox>
    )

};

export default BodyThree;