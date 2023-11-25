import {BACKEND_API} from "@/shared/api";
import axios, {AxiosResponse} from "axios";
import {IPage} from "@/shared/api/types";

export interface IApplication {
    id?: number
    title: string
    firstname: string
    lastname: string
    middlename: string
    phone: string
    type: string
    dateOfApplication: string
    city: string
    amountOfApplicants: number
    call: boolean
    total: number
}

const apiUrl = `${BACKEND_API}/applications`;

export const getApplications = async (page?: number, size?:number): Promise<AxiosResponse<IPage<IApplication>>> => {
    return axios.get(apiUrl, { params: { page, size }});
}

export const removeApplication = async (id: number) => {
    return axios.delete(`${apiUrl}/${id}`);
}

export const createApplication = async (application: IApplication) => {
    return axios.post(apiUrl, {...application});
}
