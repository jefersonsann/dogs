import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const InputForm = styled.input`
  display: block;
  font-size: 1rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid #eee;
  background: #eee;
  transition: all 0.2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fba;
  }
`;

const Error = styled.p`
  font-size: 0.875rem;
  color: #f31;
  margin-top: 0.25rem;
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
      <Label htmlFor={name}>{label}</Label>
      <InputForm
        id={name}
        name={name}
        type={type}
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
