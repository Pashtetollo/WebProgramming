import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
background-image: url(https://thumbs.dreamstime.com/b/summer-fruit-theme-charcuterie-corner-border-against-dark-slate-background-mixture-fruits-cheese-meat-appetizers-copy-222695933.jpg);
    background-size:cover;
    display: flex;
    background-color: #d48161;
    height: 420px;
    width:100%;
    justify-content: space-between;
    padding: 0 200px;
`;

export const StyledText = styled.div`
    margin-left: 20%;
    padding-top: 70px;
    width: 60%;
    color: white;
    font-size: 16px;
    h1 {
        text-align:center;
        font-size: 40px;
        color: white;
    }
`
export const StyledButton = styled(Button)`
margin-left: 40%;
    background: none;
    border-radius: 20px;
    color: white;
`;

export const CardWrapper = styled.div`
margin-left: 5vw;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin-top: 100px;
`