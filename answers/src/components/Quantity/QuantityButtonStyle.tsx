import styled from "styled-components";

export const IncrementButton = styled.button`
  background-color: #F9F6EE;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 40%;
  padding: 5px;
  cursor: pointer;
  border: 1px groove black;



  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: black;
  }
`;

export const DecrementButton = styled.button`
  background-color: #FF3131;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 40%;
  padding: 5px;
  cursor: pointer;
  border: 1px groove black;



  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: black;
  }
`;

export const QuantityView = styled.span`
justify-content: center;
align-items: center;
top: 20px;
right: 20px;
width: 30px;
height: 30px;
padding: 25px;
cursor: pointer;

:hover {
  transform: scale(1.2);
  transition: 1s;
}

p {
  font-size: 20px;
  margin: 0;
  color: white;
}
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
