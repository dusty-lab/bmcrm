import { CustomInput } from 'shared/ui/CustomInput/CustomInput'
import Button from 'shared/ui/Button/Button'
import { Link } from 'react-router-dom'
import Camp from 'shared/assets/icons/camp.svg'
import { ButtonSize } from 'shared/ui/Button/ButtonTypes'
import { stepTwoData } from './stepTwoData'
import styles from '../RegisterPage/RegisterPage.module.scss'
import { Field, Form, Formik } from 'formik'
import { IStepTwoData } from '../RegisterPage/Step.types'
interface Props {
  onSubmit: (values: IStepTwoData) => void
  initialValues: IStepTwoData
}
export const StepTwo = ({ onSubmit, initialValues }: Props) => {
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <Form className={styles.form}>
        <div className={styles.flex}>
          <CustomInput name='firstName' placeholder='Cole' label='First Name' />
          <CustomInput name='lastName' placeholder='Sprouse' label='Last Name' />
        </div>
        {stepTwoData.map(input => (
          <CustomInput key={input.name} {...input} />
        ))}
        <label className={styles.acceptLabel}>
          <Field className={styles.checkbox} type='checkbox' name='accept' />
          <span className={styles.checkmark} />
          <p>I agree to the privacy policy</p>
        </label>
        <Button
          size={ButtonSize.M}
          type='submit'
          style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}
        >
          <Camp />
          SIGN UP
        </Button>
        <p className='linkWrapper'>
          Already have an account?
          <Link className='link' to='/login'>
            Sign in
          </Link>
        </p>
      </Form>
    </Formik>
  )
}