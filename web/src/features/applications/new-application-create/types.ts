import * as yup from 'yup';
export interface InitialState {
    title: string
    amountOfApplicants: number
    phone: string
    total: number
    type: string
    city: string
    dateOfApplication: string
    call: boolean
    amount: number
}

export const validationSchema = yup.object({
    title: yup.string().required('Поле обязательное'),
    amountOfApplicants: yup.number().required('Поле обязательное'),
    phone: yup.string().required('Поле обязательное'),
    total: yup.number().required('Поле обязательное'),
    amount: yup.number().required('Поле обязательное'),
    type: yup.string().required('Поле обязательное'),
    city: yup.string().required('Поле обязательное'),
    call: yup.boolean().required('Поле обязательное'),
    dateOfApplication: yup.string().required('Поле обязательное')
})