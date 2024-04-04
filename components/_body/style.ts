import styled from "styled-components";

export const ServiceBox = styled.div`

background-color: rgb(17,17,17);
background: rgb(17,17,17);
padding: 0;
margin: 0;
margin-top: 150px;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
color: white;
padding: 0 150px;



.box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 150px;

    
    .triangulo {
  width: 0;
  height: 0;
  border-radius: 5px;
  position: relative;
  right: 65px;  
  top: -50px;
  padding: 0;
  margin: 0;  
  border-left: 30px solid transparent; /* ajuste conforme necessário */
  border-right: 30px solid transparent; /* ajuste conforme necessário */
  border-bottom: 50px solid #8e54e9; /* ajuste conforme necessário */
  z-index: 1;
}
.trianguloTwo {
  width: 0;
  height: 0;
  border-radius: 5px;
  position: relative;
  left: 75px;  
  top: -50px;
  
  border-left: 30px solid transparent; /* ajuste conforme necessário */
  border-right: 30px solid transparent; /* ajuste conforme necessário */
  border-bottom: 50px solid #8e54e9; /* ajuste conforme necessário */
  padding: 0;
  margin: 0;
  z-index: 1;
}
    h1{
        font-size: 27px;
    }
    

    p{
        width: 200px;
    }

    .circle{
        color: white;
        display: flex;
        background-color: white;
        color: #8e54e9;
        width: 120px;
        height: 120px;
        font-size: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: 1px solid #8e54e9;
        background: radial-gradient(circle at center,white 39%,white 40%, white 50%, rgb(17,17,17) 51%);
        z-index: 2;
        position: relative;
        left: 0px;
    }
    .circleright{
        color: white;
        display: flex;
        background-color: white;
        color: #8e54e9;
        width: 120px;
        height: 120px;
        font-size: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: 1px solid #8e54e9;
        background: radial-gradient(circle at center,white 39%,white 40%, white 50%, rgb(17,17,17) 51%);
        z-index: 2;
        position: relative;
        left: -50px;
    }
}

/* .uncle{
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 100px;
    h2{

        color: white;
        width: 400px;
        font-size: 30px;
        span{
            color: #f70bcf;
        }
    }

    .nephew{
        display: flex;
        justify-content: space-around;
        color: white;

        .cousin{
            width: 160px;
        }
    }
} */


@media only screen and (max-width: 768px){
    
    padding: 0 0;

.box{
    padding: 0;
    h1{
        font-size: 24px;
        margin: 15px 0
    }

    div{
       padding: 0px;
       margin: 0px;
    }
    
    .triangulo{
        right: 30px;
    }
    .circleright{
        left: -15px;
    }
}

}
`