
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Selector1 from '../selector/Selector1';
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Input1 from '../input/Input1';

import { GetDescription, GetHSEDetails } from '../../api/api';
import Table1 from '../table/Table1';
import Datepicker from '../input/Datepicker';
import { Typography } from '@mui/material';

export default function Form({ handleSave, transactionId, detailPageId}) {

    const [formData, setFormData] = useState({
        DocDate: '',
        Project: '',
        ProjectDes: '',
        Location: '',
    });


    const [item, setItem] = useState([]);
    const [collect, setCollect] = useState();

    const fetchData = async (selectedData) => {
        try {
            const response = await GetDescription(selectedData);
            if (response.data.ResultData !== "") {
                const details = JSON.parse(response.data.ResultData);
                setFormData(prevState => ({
                    ...prevState,
                    ProjectDes: details?.[0].sDescription,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setFormData(prevState => ({
            ...prevState,
            Project: selectedValue,
        }));
        fetchData(selectedValue);
    };

    const handleLocationChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            Location: e.target.value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData(prevState => ({
            ...prevState,
            DocDate: date,
        }));
    };



    useEffect(() => {
        const hseData = async (id) => {
            try {
                if (detailPageId === 1) {
                    const response = await GetHSEDetails(id);
                    if (response.data.ResultData !== "") {
                        const details = JSON.parse(response.data.ResultData);
                        setCollect(details.Header[0].iTransId);

                        setItem(details.Body);

                        setFormData({
                            DocDate: formatDate(details.Header[0].Date),
                            Project: details.Header[0].iProject,
                            ProjectDes: details.Header[0].sProjectDes,
                            Location: details.Header[0].sLocation,
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };
        hseData(transactionId);
    }, [transactionId, detailPageId]);

    useEffect(() => {
      
        const formErrors = validateForm();
          handleSave({
            iTransId: transactionId ? transactionId : 0,
            ...formData,
            UserId: 12345,
            Signature: "sign121617042162023.jpg",
          },formErrors);
        
      }, [formData]);

    const accessData = (value1,tableError) => {

        const formErrors = validateForm();
        handleSave({
            iTransId: collect ? collect : 0,
            ...formData,
            UserId: 12345,
            Signature: "sign121617042162023.jpg",
            body: value1.body,
        },formErrors,tableError);

    };


    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    };

   
     // Validation function for the form
  const validateForm = () => {
    const errors = {};

   
    if (!formData.Project) errors.Project = "Project is required";
    if (!formData.ProjectDes) errors.ProjectDes = "Project Description is required";
    if (!formData.Location || /[^a-zA-Z\s]/.test(formData.Location)) {
      errors.Location = "Location is required and should contain only letters";
    }
    if (!formData.DocDate) errors.DocDate = "Document Date is required";

    return errors;
  };


  // Use this function to pass validation status back to the Detail component
//   const handleValidate = () => {
//     const formErrors = validateForm();
//     handleSave(formErrors, "form");
//   };

  // Validate form whenever formData is changed
//   useEffect(() => {
//     handleValidate();
//   }, [formData]);
    

    return (
        <Card>
            <CardHeader title={detailPageId ? "Edit Form" : "Form"} />
            <CardContent>
                <Box sx={{ display: 'flex', gap: '50px' }}>
                    <MDBRow style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <Selector1
                            label="Project"
                            value={formData.Project}
                            onChange={handleChange}
                            options={[
                                { value: 1, label: 'Project1' },
                                { value: 2, label: 'Project2' },
                                { value: 3, label: 'Project3' },
                            ]}
                            error={Boolean(validateForm().Project)} 
                            // helperText={validateForm().Project} 
                        />

                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <Input1 label='Project Details' value={formData.ProjectDes}   
                            error={Boolean(validateForm().ProjectDes)}
                            helperText={validateForm().ProjectDes}
                            />

                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <Input1 label='Location' type='text'
                            value={formData.Location}
                                 onChange={handleLocationChange}
                                 error={Boolean(validateForm().Location)}
                                 helperText={validateForm().Location}
                                 />

                        </MDBCol>
                        <MDBCol style={{ marginTop: '15px' }} lg="3" md="4" sm="6" xs="12">
                            <Datepicker
                                value={formData.DocDate}
                                onChange={handleDateChange}
                                label={"Select Date"}
                                error={Boolean(validateForm().DocDate)}
                                 helperText={validateForm().DocDate}
                            />
                        </MDBCol>
                    </MDBRow>
                </Box>
                <Box>
                    <Table1 accessData={accessData} item={item} detailPageId={detailPageId}  />
                </Box>
            </CardContent>
        </Card>
        
    );
}



