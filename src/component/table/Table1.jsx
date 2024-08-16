


import React, { useEffect, useState } from 'react';
import {
    Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip,
    Typography
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AdvancedSearchSelect from '../selector/AdvanceSearchSelect';
import AdvanceSearchInput from '../input/AdvanceSearchInput';
import Datepicker from '../input/Datepicker';
import { GetEmployee } from '../../api/api';
import AutoComplete2 from '../AutoComplete/AutoComplete2';
import AutoComplete3 from '../AutoComplete/AutoComplete3';



export default function Table1({ accessData, item, detailPageId, }) {

    const cellStyle = {
        padding: "0px",
        paddingLeft: "4px",
        border: "1px solid #ddd",
        fontWeight: "600",
        fontSize: "14px",
        color: '#ffff',
        paddingTop: "3px",
        paddingBottom: "3px",
    }
    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: '#85B3D1',
        color: '#ffff',
    };
    const bodyCell = {
        padding: "0px",
        paddingLeft: "0px",
        border: "1px solid #ddd",
        minWidth: "100px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

    const [rows, setRows] = useState([
        { 'Observation': '', 'RiskLevel': '', 'ActionReq': '', 'ActionBy': '', 'ActionByName': '', 'EmployeeCode': '', 'TargetDate': '', 'images': '121516042152023.jpg' }
    ]);

    

      

    const [value, setValue] = useState([]);
    const [formData, setFormData] = useState([]);

    const convertDateFormat = (dateStr) => {
        const [day, month, year] = dateStr.split('-');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        if (detailPageId === 1 && item) {
            setRows(item.map((it, index) => ({
                Observation: it.sObservation || '',
                RiskLevel: it.iRiskLevel || '',
                ActionReq: it.sActionReq || '',
                ActionBy: it.iActionBy || '',
                ActionByName: it.sActionBy || '',
                EmployeeCode: it.sActionBy_Code || '',
                TargetDate: it.TargetDate ? convertDateFormat(it.TargetDate) : '',
                images: it.sImages || '121516042152023.jpg'
            })));
        } else {
            setRows([
                { 'Observation': '', 'RiskLevel': '','RiskLevelName':'',  'ActionReq': '', 'ActionBy': '', 'ActionByName': '', 'EmployeeCode': '', 'TargetDate': '', 'images': '121516042152023.jpg' }
            ]);
        }
    }, [detailPageId, item]);

    const handleAddRow = () => {
        setRows([...rows, { 'Observation': '', 'RiskLevel': '','RiskLevelName':'', 'ActionReq': '', 'ActionBy': '', 'ActionByName': '', 'EmployeeCode': '', 'TargetDate': '', 'images': '121516042152023.jpg' }]);
    };

    const handleDeleteRow = (index) => {
        if (rows.length > 1) {
            const updatedRows = rows.filter((row, rowIndex) => rowIndex !== index);
            setRows(updatedRows);
        }
    };

    const handleRowChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        if (field === 'RiskLevelName' && value?.iId) {
            updatedRows[index][field] = value.sName;
            updatedRows[index]['RiskLevel'] = value.iId;
        }
        if (field === 'ActionByName' && value?.sCode) {
            updatedRows[index][field] = value.sName;
            updatedRows[index]['EmployeeCode'] = value.sCode;
            updatedRows[index]['ActionBy'] = value.iId;
        }
        setRows(updatedRows);
    };

    // Validation function for the table
  const validateTable = () => {
    const errors = [];
    rows.forEach((row, index) => {
      const rowErrors = {};
      if (!row.Observation) rowErrors.Observation = "Observation is required";
      if (!row.RiskLevel) rowErrors.RiskLevel = "Risk Level is required";
      if (!row.ActionReq) rowErrors.ActionReq = "Action Required is required";
      if (!row.ActionBy) rowErrors.ActionBy = "Action By is required";
      if (!row.TargetDate) rowErrors.TargetDate = "Target Date is required";

      if (Object.keys(rowErrors).length > 0) {
        errors[index] = rowErrors;
      }
    });
    return errors;
  };

  // Use this function to pass validation status back to the Detail component
//   const handleValidate = () => {
//     const tableErrors = validateTable();
//     accessData(tableErrors, "table");
//   };

  // Validate table whenever rows are changed
//   useEffect(() => {
//     handleValidate();
//   }, [rows]);

    useEffect(() => {
            const filteredRows = rows.filter(row =>
                row.Observation !== '' || row.RiskLevel !== '' || row.ActionReq !== '' || row.ActionBy !== '' || row.EmployeeCode !== '' || row.TargetDate !== ''
            );
            const tableErrors = validateTable();
            accessData({
                body: filteredRows,
            },tableErrors);
        
    }, [rows]);

    useEffect(() => {
        const employeeData = async () => {
            try {
                const response = await GetEmployee();
                if (response.data.ResultData !== "") {
                    setValue(JSON.parse(response.data.ResultData));
                }
            } catch (error) {
                console.log(error);
            }
        };
        employeeData();
    }, []);

    console.log('rows',rows);

    return (
        <>
            <Box sx={{ padding: "10px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Tooltip title="Add">
                        <IconButton onClick={handleAddRow}>
                            <AddCircleIcon sx={{ color: '#0132BF' }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <TableContainer component={Paper} sx={{ maxHeight: "40vh", minHeight: "40vh", scrollbarWidth: "thin" }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headerCellStyle}>Action</TableCell>
                                <TableCell sx={headerCellStyle}>SL NO</TableCell>
                                <TableCell sx={headerCellStyle}>Observation/Findings</TableCell>
                                <TableCell sx={headerCellStyle}>Risk Level</TableCell>
                                <TableCell sx={headerCellStyle}>Action Required</TableCell>
                                <TableCell sx={headerCellStyle}>Action By</TableCell>
                                <TableCell sx={headerCellStyle}>Employee Code</TableCell>
                                <TableCell sx={headerCellStyle}>Target Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index} sx={{  padding: "0px" }}>
                                    <TableCell sx={{ ...bodyCell, minWidth: "null" }}>
                                        {rows.length > 1 && (
                                            <IconButton onClick={() => handleDeleteRow(index)}>
                                                <DeleteIcon sx={{ color: '#0132BF' }} />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell }}>
                                        <AdvanceSearchInput
                                            value={index + 1}
                                            onChange={(e) => handleRowChange(index, 'SL NO', e.target.value)}
                                            width={"100%"}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell }}>
                                        <AdvanceSearchInput
                                            value={row.Observation}
                                            onChange={(e) => handleRowChange(index, 'Observation', e.target.value)}
                                            width={"100%"}
                                            error={Boolean(
                                                validateTable()[index]?.Observation
                                              )}
                                              helperText={validateTable()[index]?.Observation}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell}}>
                                        {/* <AdvancedSearchSelect
                                            value={row.RiskLevel}
                                            onChange={(e) => handleRowChange(index, 'RiskLevel', e.target.value)}
                                            options={[
                                                { value: 1, label: 'High' },
                                                { value: 2, label: 'Medium' },
                                                { value: 3, label: 'Low' }
                                            ]}
                                            width={'100%'}
                                            error={!!errors[index]?.RiskLevel}
                                            helperText={errors[index]?.RiskLevel}
                                        /> */}
                                        <AutoComplete3
                                        formData={{ sName: row.RiskLevelName }}
                                        setFormData={(value) => handleRowChange(index, 'RiskLevelName', value)}
                                        error={Boolean(
                                            validateTable()[index]?.RiskLevel
                                          )}
                                          helperText={validateTable()[index]?.RiskLevel}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell}}>
                                        <AdvanceSearchInput
                                            value={row.ActionReq}
                                            onChange={(e) => handleRowChange(index, 'ActionReq', e.target.value)}
                                            width={"100%"}
                                            error={Boolean(
                                                validateTable()[index]?.ActionReq
                                              )}
                                              helperText={validateTable()[index]?.ActionReq}

                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell }}>
                                        <AutoComplete2
                                            formData={{ sName: row.ActionByName }}
                                            setFormData={(value) => handleRowChange(index, 'ActionByName', value)}
                                            error={Boolean(
                                                validateTable()[index]?.ActionByName
                                              )}
                                              helperText={validateTable()[index]?.ActionByName}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell}}>
                                        <AdvanceSearchInput
                                            value={row.EmployeeCode}
                                            onChange={(e) => handleRowChange(index, 'EmployeeCode', e.target.value)}
                                            width={"100%"}
                                            error={Boolean(
                                                validateTable()[index]?.EmployeeCode
                                              )}
                                              helperText={validateTable()[index]?.EmployeeCode}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ ...bodyCell}}>
                                        <Datepicker
                                            value={row.TargetDate}
                                            onChange={(date) => handleRowChange(index, 'TargetDate', date)}
                                            error={Boolean(
                                                validateTable()[index]?.TargetDate
                                              )}
                                              helperText={validateTable()[index]?.TargetDate}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

       
    );
}


