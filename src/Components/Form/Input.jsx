import React from 'react';
import styled from 'styled-components';
import Error from '../Helper/Error';

const Wrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  position: absolute;
  top: 17px;
  left: 10px;
  font-size: 0.7rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  text-transform: uppercase;

  user-select: none;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
`;

const InputForm = styled.input`
  display: block;
  font-size: 1rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid #eee;
  background: #eee;
  font-weight: 600;
  transition: all 0.2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--colorPrimary);
    background: white;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -8px;
    left: 15px;
    padding: 0.2rem 0.5rem 0.1rem;
    background-color: white;
    border: 1px solid var(--colorPrimary);
  }
`;

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  ...props
}) => {
  return (
    <Wrapper>
      <InputForm
        id={name}
        name={name}
        type={type}
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Label htmlFor={name}>{label}</Label>
      <Error error={error} />
    </Wrapper>
  );
};

export default Input;
