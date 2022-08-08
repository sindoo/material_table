import React, {ChangeEvent, useState} from 'react'
import MaterialTable  from 'material-table'
import * as XLSX  from 'xlsx'

const EXTENSIONS = ['xlsx', 'xls', 'csv']
export const ImportExcelCsvTable = () => {
    const [colDefs, setColDefs] = useState([])
    const [data, setData] = useState([])

    const convertToJson = (headers:any, data:any) => {
        const rows:any = []
        data.forEach((row:any) => {
            let rowData:any = {}
            row.forEach((element:any, index:number) => {
                rowData[headers[index]] = element
            })
            rows.push(rowData)
        })

        return rows
    }

    const getExtension = (file:any) => {
        const parts = file.name.split('.')
        const extension = parts[parts.length - 1]
        return EXTENSIONS.includes(extension)
    }

    const importExcel = (e:any) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (event:any) => {
            //parse data
            const bstr = event.target.result
            const workBook = XLSX.read(bstr, {type:"binary"})

            //get first sheet
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]

            //Convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1})
            const headers:any = fileData[0]
            const heads = headers.map((head:string) => ({title:head, field:head}))
            setColDefs(heads)

            //Removing headers
            fileData.splice(0,1)
            setData(convertToJson(headers, fileData))
        }

        if(file) {
            if(getExtension(file)) {
                reader.readAsBinaryString(file)
            }
            else {
                alert('Extention error')
            }
        }
        else {
            setData([])
            setColDefs([])
        }
    }

    return (
        <div style={{margin:'2%', marginTop:'3%'}}>
            <input type="file" name="send" id="send" onChange={importExcel}/> <br/><br/>
            <MaterialTable
                title="Import Data from Excel or CSV in Material Table"
                columns={colDefs}
                data={data}
            />
        </div>
    )
}
