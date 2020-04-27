import React, { useState, useRef, useEffect } from 'react';
import { Label, Container, InputContainer, TextInput } from './styles';

export default function Input(props) {
    const inputEl = useRef(null);
    const [thisInput, setThisInput] = useState(
        {
            value: '',
            focus: false
        }
    );

    useEffect(() => {
        props.inputStateCallback(thisInput.value)
    }, [thisInput]);
    
    return (
        <Container>
            <InputContainer>
                <TextInput 
                ref={inputEl}
                onChangeText={text => setThisInput({value: text, focus: true})} 
                onFocus={() => setThisInput({value: thisInput.value, focus: true})} 
                onBlur={() => setThisInput({value: thisInput.value, focus: false})}
                secureTextEntry={props.secureTextEntry || false}
                />
                <Label inputReference={thisInput} onPress={() => {inputEl.current.focus()}} >{props.label}</Label>
            </InputContainer>
        </Container>
    );
}