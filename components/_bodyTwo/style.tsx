import styled from "styled-components";



export const FooterBox = styled.div`

display: flex;
flex-direction: column;
width: 100%;
font-family: Roboto, sans-serif;
padding:0;
margin: 0;
background-color: rgb(17,17,17);
align-items: center;

hr{
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    border: none;
    width: 146px;
    height: 5px;
    margin-top: 50px;
}

h1{
    font-size: 50px;
    color: white;
}

p{
    font-size: 20px;
    color: white;
    width: 530px;
    text-align: justify;
}

.img{
    width: 1000px;
    height: 500px;
    border-radius: 40px;
    border-bottom: 15px solid #8e54e9;
    margin: 50px 0;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        object-fit: fill !important;
    }
}

.tribox{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.trianguloone {
  
  position: relative;
  z-index: 3;
}
.triangulotwo {
  
  position: relative;
  z-index: 2;
  bottom: 65px;
}
.triangulothree {
  
  position: relative;
  z-index: 1;
  bottom: 120px;
}


.teadropfather{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    

    
    .wildcard{
            display: none;
        }
    .children{
        display: flex;
    flex-direction: column;    
    padding-left: 50px;
    height: 600px;
    overflow: hidden;

    .grandson{

        
        
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            position: relative;
            bottom: 300px;
            right: 180px;
            width: 500px;
            text-align: right;
        }
    }
    .grandsonInverted{
        .wildcard{
            display: none;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            position: relative;
            bottom: 300px;
            left: 180px;
            width: 500px;
            text-align: left;
        }
    }


    .circle{
        background-color: white;
        border-radius: 50%;
        height: 350px;
        width: 350px;
        position: relative;
        bottom: 490px;
        left: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('/fe9691cd14505e64f134d13ee4f93767.jpg');



        h2{
            font-size: 60px;
            width: 250px;
            text-align: center;
            color: white;
            font-weight: 400;
        }
    }

    .circle.three {
        background-image: url('/7d525c1dd2adadd7c6259d3e22b44422.jpg');
    }
    .circleInverted{
        background-color: white;
        border-radius: 50%;
        height: 350px;
        width: 350px;
        position: relative;
        bottom: 490px;
        right: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('/744677e737b522f1b0b36fdcf920d4aa.jpg');



        h2{
            font-size: 60px;
            width: 300px;
            text-align: center;
            color: white;
            font-weight: 400;
        }
    }
    }
}


@media only screen and (max-width: 768px){

    h1{
        margin: 15px 0;
    }

    p{
        width: 400px;
    }

    .img{
        width: 400px;
    height: 200px;
    img{
        object-fit: cover !important;
    }
    }

    .teadropfather{
        height: 700px;
        

    .wildBox {
    display: flex;
    flex-direction: row;
align-self: center;
    flex-wrap: nowrap;    
    overflow-y: hidden;
    overflow-x: auto;    
    align-items: center;
    width: 400px;   
    min-height: 700px;
    height: 700px;
    gap: 15px;
    
    position: relative;
    bottom: 0px;

    .wildBox::after {
    content: ""; /* Cria um elemento vazio */
    position: absolute; /* Posicionamento absoluto em relação ao contêiner .wildBox */
    top: 0;
    right: 0;
    bottom: 0;
    width: 12px; /* Largura da barra de rolagem falsa */
    background-color: transparent; /* Cor da barra de rolagem falsa */
}
}

.wildcard {
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center !important;
    margin-left: 20px;
    flex: 0 0 330px; /* Fixa o tamanho das divs filho em 400px */
    min-height: 700px;
    height: 700px;
      
    z-index: 50;
    
    .circle{
        margin-top: 50px;
        background-color: white;
        border-radius: 50%;
        height: 300px;
        width: 300px;
       /*  position: relative;
        bottom: 528px;
        left: 280px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('/fe9691cd14505e64f134d13ee4f93767.jpg');

        h2{
        font-size: 40px;
            width: 150px;
            color: white;
            font-weight: 600;
        }

        }

        .circleInverted{
            margin-top: 50px;
        background-color: white;
        border-radius: 50%;
        height: 300px;
        width: 300px;
           /*  position: relative;
            bottom: 528px;
            left: 25px; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: url('/744677e737b522f1b0b36fdcf920d4aa.jpg');
    
    
    
            h2{
                font-size: 40px;
                    width: 150px;
                    color: white;
                    font-weight: 600;
                }
        
        }

        
    .circle.three {
        background-image: url('/7d525c1dd2adadd7c6259d3e22b44422.jpg');
    }
        p{
            text-align: center;
            width: 300px;
            
        }
    }

}

.wildcard.one {
    background-image: linear-gradient(to right top, #7c4dff, #5469ff, #247dff, #008eff, #009bf8, #00a3f4, #00abef, #00b1e8, #00b7e9, #00bdea, #00c3ea, #01c9ea);
}
.wildcard.two {
    background-image: linear-gradient(to right top, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
}
.wildcard.three {
    background-image: linear-gradient(to right top, #ff7a2f, #f77038, #ed663f, #e35e44, #d75649, #d65249, #d64d49, #d54949, #e04545, #ea4141, #f53c3c, #ff3737);
}

    .children{
    
        overflow: hidden !important;
        display: none;
    }
    .grandson{

        display: flex;
        flex-direction: column;
        align-items: center;
        
       svg{
            display: none;
       }
       .circle{
        display: none;
       }
         .circleInverted{
        display: none;
       }
      
       }
     
        
     
    }
    .grandsonInverted{
        svg{
            color: linear-gradient(to right top, #ff7a2f, #f77038, #ed663f, #e35e44, #d75649, #d65249, #d64d49, #d54949, #e04545, #ea4141, #f53c3c, #ff3737);

       }
}
`