import styled from "styled-components";

export const Loadbox = styled.div`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
background-color: rgb(17,17,17);
border: none;
padding: 0;
margin: 0;
color: white;

.imgs{

    display: flex;
    flex-direction: row;
    padding: 50px;
    gap: 50px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    
    }
    h2{
        font-size: 50px;
    }

    p{
        font-size: 20px;
        width: 300px;
        text-align: justify;  
    }
    .map, .diamond{
     width: 800px;
     height: 400px; 
     border-radius: 60px;
     border-bottom: 15px solid #8e54e9;
     overflow: hidden;
   position: relative;
   display: flex;
  justify-content: center;
  align-items: center;

    }
}

hr{
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    width: 146px;
    height: 5px;
    margin-top: 50px;
    border: none;
}

h1{
    font-size: 50px;
    color: white;
}

.pboxagain{
    width: 600px;
    font-size: 20px;
    color: white;
    text-align: center;;  
}


.screens{
    display: flex;
    flex-direction: row;
  align-self: center;
    padding: 0;
    padding-left: 130px;
    margin: 0;
    
    height: 1100px;
    
    
    

    .icon p{
                width: 100px;
                font-size: 90px;
                margin-right: 90px;
                margin-top: 150px;
            }

    .children{
        padding: 0;
        margin: 0;
        width: 600px;
        
       h1{
        margin: 15px 0;
       }

        svg{
            position: relative;
            z-index: 2;
            padding: 0;
            margin: 0;
        }
            .print{

                width: 382px;
                height: 830px;
                position: relative;
                z-index: 1;
                padding: 0;
                margin: 0;
                bottom: 852px;
                left: 23px;
                overflow: hidden;
   position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
            }

          
    }
}

/* .react-flow__node {

 
 width: 150px;  
 height: 150px; 
 border-radius: 50%; 
  background-image: url('../../../public/82b52388d2418b4c76480d7e6fc35ca3.jpg'); 
  background-size: cover; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
 */

.circleBox{
  
    background-color: rgb(17,17,17);
    margin-top: 100px;

    .circleOne{

        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        left: 0px;
        z-index: 2;
        background-image: url('/522b89a6e06ce18044367a842aca9275.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
    }
    .circleTwo{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        top: 0px;
        right: 0px;
        z-index: 2;
        background-image: url('/31c3a32989fe4fd21bcdade143df7f6b.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
    }
    .circleThree{

        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 300px;
        z-index: 2;
        background-image: url('/5bb92a1b96831f3c1f7298e4c1e61fa5.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
    }

    .circleFour{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 200px;
        z-index: 2;
        background-image: url('/5a446cc28dd65340810ff8e96cb15c3c.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
    }
    }
    .circleFive{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 200px;
        left: 600px;
        z-index: 2;
        background-image: url('/57d3493b65b102b195ab45bae13d31e3.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
       
    }
    
    .barOne{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 850px;
        left: 50px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barTwo{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 800px;
        left: 300px;
        transform: rotateZ(230deg) ;
        z-index: 1;
    }
    .barThree{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 450px;
        left: 250px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barFour{
        background-color: white;
        position: relative;
        width: 250px;
        height: 5px;
        bottom: 350px;
        left: 500px;
        transform: rotateZ(250deg) ;
        z-index: 1;
    }
}


.bigball{
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px dotted gray;
    margin: 100px;
   


}

.ballBox{

    height: 900px;
}

.ball{
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    background-size: cover; 
    background-position: center; 
}
.ball.one{
    background-image: url('/36ca7c6dd22f1acad34ea31d936cbc5f.jpg'); 
    bottom: 750px;
    left: 350px;    
}
.ball.two{
    background-image: url('/39532aab00e737c2ccc737f1cec84adb.jpg');
    bottom: 700px;
    left: 600px;     
}
.ball.three{
    background-image: url('/a303a25e2cf567bfc9f116796f95d73a.jpg');
    bottom: 520px;
    left: 620px; 
}
.ball.four{
    background-image: url('/f4a453b9dc62fbc5292961c9f5ce7b0f.jpg'); 
    bottom: 450px;
    left: 350px; 
}
.ball.five{
    background-image: url('/ed081b73cbbdca982d22b2a6774a135a.jpg'); 
    bottom: 720px;
    left: 80px; 
}
.ball.six{
    background-image: url('/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
    bottom: 1100px;
    left: 100px; 
}

@media only screen and (max-width: 768px){

    p{
        width: 400px;
    }
    .imgs{
        flex-direction: column !important;
        padding: 0px !important;
        gap: 0px;
        align-items: center;
        
        h2{
            text-align: center;
            margin-bottom: 15px;
        }
        
        div{
            padding: 0px;
        }
     

        .map, .diamond{
        width: 400px !important;
        height: 200px !important; 
        img{
            object-fit: cover !important;
        }
        }


        .imgs.one{
            flex-direction: column-reverse !important
        }

        .pboxagain{
            width: 380px !important;
            text-align: justify !important;
        }
    }

    .screens{
    display: flex;
    flex-direction: column !important;
    align-items: center;
    width: 100%;
    padding-left: 40px !important;
    margin-bottom: 200px !important;
    margin-top: 100px !important;
    height: 1900px !important;
        .icon p{
            width: 400px;
            text-align: center;
            margin-top: 0px;
            position: relative;
            height: 0px;
            z-index: 2;
            bottom: 1040px;

        }

        .children{
width: 414px !important;
align-self: center;
            h1{
                width: 414px;
            }
            max-height: 700px;
            margin-bottom: 100px !important;
            
            svg{
                width: 380px;
            }

            .print{
                width: 350px !important;
                height: 735px !important;
                bottom: 804px !important;
                border-radius: 15px;
                left: 16px !important;
                }
         }

    

    }

    .circleBox{
    
        .circleOne{
        width: 250px !important;
        height: 250px !important;

        }
        .circleTwo{
            width: 75px !important;
            height: 75px !important;
        }
        .circleThree{

        width: 175px !important;
        height: 175px !important;
        left: 120px !important;
        bottom: 50px !important;
        }

        .circleFour{
            width: 75px !important;
            height: 75px !important;
            bottom: 20px !important;
            left: 100px !important;
        }

        .circleFive{
            width: 75px !important;
            height: 75px !important; 
            bottom: 100px !important;
            left: 235px !important;
        }

        .barOne{
            bottom: 450px;
            left: 0px;
        }
        .barTwo{
            bottom: 400px;
            left: 100px;
        }
        .barThree{
            bottom: 250px;
            left: 100px;
        }
        .barFour{
            bottom: 250px;
            left: 120px;
        }
    }

    .ballBox{

height: 600px;
}
    .bigball{
        width: 350px;
        height: 350px;
    
    }

    .ball{
    width: 80px;
    height: 80px;
 
}
.ball.one{
    
    bottom: 500px;
    left: 250px;    
}
.ball.two{
 
    bottom: 500px;
    left: 370px;     
}
.ball.three{
 
    bottom: 380px;
    left: 370px; 
}
.ball.four{
 
    bottom: 390px;
    left: 240px; 
}
.ball.five{
 
    bottom: 520px;
    left: 100px; 
}

.ball.six{
    background-image: url('/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
    bottom: 800px;
    left: 90px; 
}

.pboxagain{
    width: 400px !important;
    margin: 15px 0;
}

hr{
    margin: 15px 0;
}
}

`