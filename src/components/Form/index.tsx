import * as Styled from 'src/components/Form/styles'
import { useForm } from "react-hook-form";
import {ReactNode} from 'react'

const Form = ({ handleViewCard }) => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  return (
      <>
        <Styled.HeaderText>
          Введи цифру от 1 до 44 и получи напутствие!
        </Styled.HeaderText>
        <Styled.Form onSubmit={handleSubmit(handleViewCard)}>
          <Styled.Input type="number" { ...register("luckyNumber", { required: 'Это поле обязательно к заполнению', min: { value: 1, message: 'Минимально 1'}, max: { value: 44, message: 'Максимально 44'} }) }/>
          {errors.luckyNumber && <Styled.ErrorText>{errors.luckyNumber.message as ReactNode}</Styled.ErrorText>}
          <Styled.Button >Хочу знать!</Styled.Button>
        </Styled.Form>
      </>
  )
}

export default Form