import styled from "styled-components";




export const AboutBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: Roboto, sans-serif;
padding:0;
margin: 0;
background-color: rgb(17,17,17);
align-items: center;



.logo{
    width: 414px;
    height: 210px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 80px;
    z-index: 3;
}

.circlebox{
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: black;
    justify-content: center;
 

    .circle{
        width: 150px;
        height: 150px;       
        position: relative;
        background: radial-gradient(circle at center, transparent 71%, rgb(17,17,17) 51%);
        z-index: 2;
      
    }

    .newimg{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        bottom: 600px;
    }
}

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
    margin: 30px;
}

p{
    font-size: 20px;
    color: white;
    width: 530px;
    text-align: justify;
}

@media only screen and (max-width: 768px){
    
    .logo{
        width: 207px;
        height: 105px;
        position: relative; 
        top: 30px;
    }
    .circlebox{
        width: 405px;
        height: 270px;
        border: none;
        background-color: rgb(17,17,17);

    .circle{
        width: 67px;
        height: 67px; 
    }
    .newimg{
        width: 402px;
        height: 267px;
        bottom: 267px;
        right: 0px;
    }
    }
   
    p{
        width: 380px;
    }
    
}


`