import styled from "styled-components";


export const Container = styled.View`
    background-color: #121219;
    height: 350px; 
    width: 100%;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
    height: 60px;
    background: #121219;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;  
    
`;

export const ButtonClose = styled.TouchableOpacity`
`;

export const Name = styled.Text`
    color: #48cae4;
    font-size: 22px;
    font-weight: bold;
    margin-left: 20px;
`;

export const Description = styled.Text`
   margin: 10px;
   font-size: 16px;
   color: #fff;  
`;

