import React from 'react';
import styled from 'styled-components'

const FormWrapper = styled.div`
background-color: #8395a7;
`;

const SizeTxt = styled.div`
max-width: 650px;
position: absolute;
top: 35%;
left: 50%;
transform: translate(-50%,-50%);
text-align: center;
> span {
    letter-spacing: 5px;
}
> h1 {
    font-size: 3.5em;
}
`;


export default function Loader(){

    return(
     <>
        <FormWrapper>
            <SizeTxt>
            <span>The Ultimate Push</span>
            <h1>Let's Post</h1>
            </SizeTxt>
        </FormWrapper>
     </>
    );
}