import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.pureWhite};
  padding: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  filter: drop-shadow(rgba(0,0,0,0.18) 0px 1.5rem 0.6rem);
  transition: all 0.2s ease 0s;
  width: 50rem;
`


export const Title = styled.h2`
  font-size: 2rem;
`

export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export const DateInput = styled(DatePicker)`
  display: flex;
  & .react-datepicker-wrapper {
    display: flex;
    & .react-datepicker__input-container {
      & input {
        border-radius: 0.5rem !important;
        border: 1px solid ${props => props.theme.colors.darkBlue} !important;
      }
  }
  }

`

export const Input = styled.input`
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.darkBlue};
  margin: 0 1rem 1rem 0;
`

export const Errors = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.red};
  margin-bottom: 2rem;
`

export const SubmitButton = styled.button`
`

export const Text = styled.p`
  font-size: 1.2rem;
`