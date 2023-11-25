import * as yup from 'yup';
import {PageWrapper} from "@/shared/ui";
import classnames from "classnames/bind";
import styles from './new-application.module.scss';
import {useFormik} from "formik";
import {NewApplicationCreate} from "@/features/applications/new-application-create";

const cn = classnames.bind(styles);

const NewApplication = () => {
    const state = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: yup
    })

    return (
        <PageWrapper>
            <NewApplicationCreate />
        </PageWrapper>
    )
}

export default NewApplication