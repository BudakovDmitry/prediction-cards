import * as Styled from 'src/components/Form/styles'
import { useForm } from 'react-hook-form'
import { ReactNode } from 'react'

const Form = ({ handleViewCard, setDisabledOppositeField }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <>
      <Styled.HeaderText>
        Введи цифру від 1 до 44 та отримай напуття!
      </Styled.HeaderText>
      <Styled.Form onSubmit={handleSubmit(handleViewCard)}>
        <Styled.Input
          type="number"
          {...register('luckyNumber', {
            required: "Це поле обов'язково до заповнення",
            min: { value: 1, message: 'Мінімально 1' },
            max: { value: 44, message: 'Максимально 44' },
          })}
        />
        {errors.luckyNumber && (
          <Styled.ErrorText>
            {errors.luckyNumber.message as ReactNode}
          </Styled.ErrorText>
        )}
        <Styled.Button onClick={() => setDisabledOppositeField(true)}>
          Хочу знать!
        </Styled.Button>
      </Styled.Form>
    </>
  )
}

export default Form
