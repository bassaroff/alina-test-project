import {Col, Row} from "@/shared/ui";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    InputAdornment,
    InputLabel,
    MenuItem, Radio, RadioGroup,
    Select,
    TextField
} from "@mui/material";
import {useFormik} from "formik";
import {InitialState, validationSchema} from "./types";
import InputMask from 'react-input-mask'
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {createApplication, IApplication} from "@/shared/api/applications";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

const initialValues: InitialState = {
    city: '',
    dateOfApplication: "",
    amountOfApplicants: 0,
    phone: "",
    title: "",
    total: 0,
    amount: 0,
    type: "",
    call: false
}

export const NewApplicationCreate = () => {
    const navigate = useNavigate();
    const state = useFormik({
        initialValues,
        onSubmit: async values => {
            const application: IApplication = {
                amountOfApplicants: values.amountOfApplicants,
                title: values.title,
                dateOfApplication: dayjs(values.dateOfApplication).format('DD-MM-YYYY'),
                total: values.total,
                call: values.call,
                city: values.city,
                firstname: "Тест",
                lastname: "Тестов",
                middlename: "Тестович",
                phone: values.phone,
                type: values.type,
            }

            try {
                const response = await createApplication(application);
                if (response.status === 200) {
                    navigate('/applications/my')
                }
            } catch (e) {
                console.log(e);
            }
        },
        validationSchema
    })

    const clearState = () => {
        state.setValues({
            city: '',
            dateOfApplication: "",
            amountOfApplicants: 0,
            phone: "",
            title: "",
            total: 0,
            type: "",
            call: false,
            amount: 0
        })
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Row>
                    <Col col={5} colSm={12}>
                        <Row>
                            <Col col={12} colSm={12}>
                                <TextField
                                    error={state.touched.title && Boolean(state.errors.title)}
                                    helperText={state.touched.title && state.errors.title}
                                    fullWidth
                                    onChange={(e) => state.setFieldValue('title', e.target.value)}
                                    value={state.values.title}
                                    label="Название заявки*"
                                    placeholder="Напишите название заявки"
                                />
                            </Col>
                            <Col col={5} colSm={12}>
                                <TextField
                                    error={state.touched.total && Boolean(state.errors.total)}
                                    helperText={state.touched.total && state.errors.total}
                                    label="Сумма*"
                                    fullWidth
                                    onChange={(e) => state.setFieldValue('total', e.target.value)}
                                    value={state.values.total}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">₸</InputAdornment>,
                                    }}
                                />
                            </Col>
                            <Col col={7} colSm={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="type-select-label">Тип заявки*</InputLabel>
                                    <Select
                                        labelId="type-select-label"
                                        label="Тип заявки*"
                                        value={state.values.type}
                                        onChange={(e) => state.setFieldValue('type', e.target.value)}
                                    >
                                        <MenuItem value={'classic'}>Классический</MenuItem>
                                        <MenuItem value={'no-classic'}>Неклассический</MenuItem>
                                        <MenuItem value={'other'}>Какой-то еще</MenuItem>
                                    </Select>
                                </FormControl>
                                { state.touched.type && state.errors.type }
                            </Col>
                        </Row>
                    </Col>
                    <Col col={7} colSm={12}>
                        <Row>
                            <Col col={5} colSm={12}>
                                <TextField
                                    error={state.touched.amount && Boolean(state.errors.amountOfApplicants)}
                                    helperText={state.touched.amountOfApplicants && state.errors.amountOfApplicants}
                                    fullWidth
                                    onChange={(e) => state.setFieldValue('amountOfApplicants', e.target.value)}
                                    label="Количество заявителей"
                                    value={state.values.amountOfApplicants}
                                    type="number"
                                    placeholder="1"
                                />
                            </Col>
                            <Col col={7} colSm={12}>
                                <InputMask
                                    mask="+7(999)999-99-99"
                                    maskChar=" "
                                    value={state.values.phone}
                                    onChange={(e) => state.setFieldValue('phone', e.target.value)}
                                >
                                    {/*@ts-ignore*/}
                                    {() => <TextField
                                        error={state.touched.title && Boolean(state.errors.title)}
                                        helperText={state.touched.title && state.errors.title}
                                        fullWidth
                                        name="phone"
                                        label="Номер телефона*"
                                        placeholder="+7(999)999-99-99"
                                    />}
                                </InputMask>
                            </Col>
                            <Col col={5} colSm={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="type-select-label">Город*</InputLabel>
                                    <Select
                                        labelId="type-select-label"
                                        label="Город*"
                                        value={state.values.city}
                                        onChange={(e) => state.setFieldValue('city', e.target.value)}
                                    >
                                        <MenuItem value={"almaty"}>Алматы</MenuItem>
                                        <MenuItem value={"astana"}>Астана</MenuItem>
                                        <MenuItem value={"other"}>Какой-то еще</MenuItem>
                                    </Select>
                                </FormControl>
                                { state.touched.city && state.errors.city && 'Поле обязательно' }
                            </Col>
                            <Col col={7} colSm={12}>
                                <DatePicker
                                    sx={{
                                        width: '100%'
                                    }}
                                    label="Дата заявки"
                                    onChange={(newValue) => {
                                        state.setFieldValue('dateOfApplication', newValue)
                                    }}
                                />

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col col={12} colSm={12}>
                        <FormControl>
                            <FormLabel id="call-label">Позвонить для подтверждения</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="call-label"
                                onChange={(e) => {
                                    state.setFieldValue('call', e.target.value)
                                }}
                                value={state.values.call}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Да" />
                                <FormControlLabel value="false" control={<Radio />} label="Нет" />
                            </RadioGroup>
                        </FormControl>
                        { state.touched.call && state.errors.call }
                    </Col>
                    <Col col={12} colSm={12}>
                        <FormControl>
                            <FormLabel id="additional-label">Получать дополнительную информацию</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Письма на почту" />
                                <FormControlLabel control={<Checkbox />} label="СМС на телефон" />
                            </FormGroup>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col col={3} colSm={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                state.handleSubmit();
                            } }
                        >
                            Отправить
                        </Button>
                    </Col>
                    <Col col={3} colSm={12}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={clearState}
                        >
                            Очистить
                        </Button>
                    </Col>
                </Row>
            </LocalizationProvider>
        </>
    )
}