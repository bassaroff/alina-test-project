import {DataGrid, GridApi, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {getApplications, IApplication, removeApplication} from "@/shared/api/applications";
import {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogTitle, IconButton, TablePagination} from "@mui/material";
import {IPage} from "@/shared/api/types";
import * as React from "react";


export const ApplicationList = () => {
    const [applications, setApplications] = useState<IPage<IApplication>>({
        content: [],
        page: 0,
        size: 0,
        totalElements: 0
    });
    const [idToRemove, setIdToRemove] = useState<number | null>(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const rows: GridRowsProp = [
        ...applications.content.map(i => ({
            id: i.id,
            col1: i.id,
            col2: i.lastname + ' ' + i.firstname.substring(0, 1) + '.' + i.middlename.substring(0, 1) + '.',
            col3: i.phone,
            col4: i.type,
            col5: i.dateOfApplication,
            col6: i.total,
            col7: i.city,
            col8: i.call
        }))
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'ID', width: 150 },
        { field: 'col2', headerName: 'ФИО', width: 150 },
        { field: 'col3', headerName: 'Номер телефона', width: 150 },
        { field: 'col4', headerName: 'Тип заявки', width: 150 },
        { field: 'col5', headerName: 'Дата', width: 150 },
        { field: 'col6', headerName: 'Кол-во', width: 150 },
        { field: 'col7', headerName: 'Город', width: 150 },
        { field: 'col8', headerName: 'Звонок', width: 150 },
        { field: 'col9', headerName: '', width: 150, renderCell: (params) => {
                // @ts-ignore
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    setIdToRemove(params.row.col1);
                };

                return <Button color="error" onClick={onClick}>Удалить</Button>;
            } }
    ];

    const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, pageNumber: number) => {
        setPage(pageNumber);
    }
    const onRowsPerPageChange = (event: React.ChangeEvent) => {
        // @ts-ignore
        setSize(event.target.value);
        setPage(0);
    }


    const loadData = async () => {
        try {
            const { data } = await getApplications(page, size)
            setApplications(data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleRemoveApplication = async () => {
        if (typeof idToRemove === 'number') {
            try {
                await removeApplication(idToRemove)
            } catch (e) {
                setIdToRemove(null);
                console.log(e);
            } finally {
                setIdToRemove(null);
                loadData();
            }
        }
    }

    useEffect(() => {
        loadData();
    },[page, size])

    return (
       <>
           <DataGrid
               rows={rows}
               columns={columns}
               slots={{
                   footer: TablePagination
               }}
               slotProps={{
                   footer: {
                       // @ts-ignore
                       count: applications.totalElements,
                       page,
                       rowsPerPage: size,
                       onPageChange,
                       onRowsPerPageChange
                   }
               }}
           />
           <Dialog
               open={typeof idToRemove === 'number'}
               onClose={() => setIdToRemove(null)}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
           >
               <DialogTitle>
                   Вы точно хотите удалить заявку с id={idToRemove}
               </DialogTitle>
               <DialogActions>
                   <Button onClick={() => setIdToRemove(null)}>Нет</Button>
                   <Button onClick={handleRemoveApplication} autoFocus>
                       Да
                   </Button>
               </DialogActions>
           </Dialog>
       </>
    )
}