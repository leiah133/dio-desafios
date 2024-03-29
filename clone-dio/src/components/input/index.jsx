import React from 'react'
import {InputContainer, IconContainer, InputText} from './style'


export const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <InputText {...rest} />
    </InputContainer>
  )
}
