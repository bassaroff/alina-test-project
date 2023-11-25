import {json} from "express";

let applications = [...Array(300).keys()].map(i => {
    return {
        id: i,
        title: 'Title',
        firstname: 'Иван',
        lastname: 'Иванов',
        middlename: 'Иванович',
        phone: '+7 777 123 45 67',
        type: 'classic',
        dateOfApplication: '15-11-2023',
        amountOfApplicants: 2,
        city: 'almaty',
        call: true,
        total: 2000
    }
});

function getPageData(page, size) {
    const startIndex = +page * +size;
    const endIndex = +startIndex + +size;
    const filteredApplications = applications.slice(startIndex, endIndex);

    return {
        content: filteredApplications,
        page: page,
        size: size,
        totalElements: applications.length
    };
}

export const getApplications = (req, res) => {
    const { page = 0, size = 10 } = req.query;
    res.json(getPageData(page, size))
}

export const removeApplication = (req, res) => {
    const id = req.params.id;
    applications = applications.filter(i => i.id !== +id);

    res.status(200).json({
        message: 'deleted with id: ' + id
    })
}

export const createApplication = (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const newApp = {
        ...req.body,
        id: applications.length + 1
    }
    applications.push(newApp)
    res.json(newApp);
}