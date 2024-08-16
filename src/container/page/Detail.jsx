
// import React, { useState } from "react";
// import {
//   Box,
//   CssBaseline,
//   IconButton,
// } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import CloseIcon from "@mui/icons-material/Close";
// import SaveIcon from "@mui/icons-material/Save";
// import { MDBCardBody } from "mdb-react-ui-kit";
// import Form from "../../component/form/Form";
// import { PostData } from "../../api/api";


// export default function Detail({ setPage, detailPageId, transactionId }) {

//   const [work, setWork] = useState([]);



//   const handleClose = () => {
//     setPage("summary")
//   };

//   const onSubmit = async () => {;
//     // setState(true);
//     try {
//       const response = await PostData(work);
//       if (response.data.ResultData !== "") {
//         const details = JSON.parse(response.data.ResultData);
//         // After saving, navigate to the summary page
//         setPage("summary");
//       }
//     } catch (error) {
//       console.log(error);
//     }
    
//   }



  

  

//   const handleSave = (item) => {
//     setWork({...work, ...item});
//   };
  
//   return (
//     <>
//       <CssBaseline />

//       <React.StrictMode>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "end",
//             alignItems: "center",
//             width: "100%",
//             paddingLeft: 1.5,
//             paddingRight: 1.5,
//             zIndex: 1,
//             // backgroundColor: secondryColor,
//           }}
//         >

//           <Stack
//             direction="row"
//             alignItems="center"
//             spacing={1}
//             sx={{ flex: "0 0 auto" }}
//           >

//             <IconButton
//               onClick={onSubmit}
//               aria-label="Clone"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem", }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <SaveIcon />
//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ fontSize: "0.6rem", color: '#B9B9B9', }}
//                 >
//                   Save
//                 </Typography>
//               </Stack>
//             </IconButton>

//             <IconButton
//               onClick={handleClose}
//               aria-label="Close"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <CloseIcon />
//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
//                 >
//                   Close
//                 </Typography>
//               </Stack>
//             </IconButton>
//           </Stack>
//         </Box>
//         <div>
//           {detailPageId === 0 &&
//             <>
//               <div>
//                 <MDBCardBody>
//                   <Form  handleSave={handleSave} detailPageId={detailPageId}  />
//                 </MDBCardBody>
//               </div>
//             </>
//           }
//         </div>
//         <div>
//           {detailPageId === 1 &&
//             <>
//               <div>
//                 <MDBCardBody>
//                   <Form  handleSave={handleSave} transactionId={transactionId} detailPageId={detailPageId} />
//                 </MDBCardBody>
//               </div>
//             </>
//           }
//         </div>
//       </React.StrictMode>
//     </>
//   )
// }


// import React, { useState } from "react";
// import {
//   Box,
//   CssBaseline,
//   IconButton,
//   Typography,
//   Stack,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import SaveIcon from "@mui/icons-material/Save";
// import { MDBCardBody } from "mdb-react-ui-kit";
// import Form from "../../component/form/Form";
// import { PostData } from "../../api/api";


// export default function Detail({ setPage, detailPageId, transactionId }) {
//   const [work, setWork] = useState([]);

//   const handleClose = () => {
//     setPage("summary");
//   };
//   const onSubmit = async () => {
   
//       console.log('work',work);
//     try {
//       const response = await PostData(work);
//       if (response.data.ResultData !== "") {
//         const details = JSON.parse(response.data.ResultData);
//         setPage("summary");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSave = (item) => {
//     setWork({ ...work, ...item });
//   };

//   return (
//     <>
//       <CssBaseline />
//       <React.StrictMode>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "end",
//             alignItems: "center",
//             width: "100%",
//             paddingLeft: 1.5,
//             paddingRight: 1.5,
//             zIndex: 1,
//           }}
//         >
//           <Stack direction="row" alignItems="center" spacing={1} sx={{ flex: "0 0 auto" }}>
//             <IconButton
//               onClick={onSubmit}
//               aria-label="Save"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <SaveIcon />
//                 <Typography variant="caption" align="center" style={{ fontSize: "0.6rem", color: '#B9B9B9' }}>
//                   Save
//                 </Typography>
//               </Stack>
//             </IconButton>

//             <IconButton
//               onClick={handleClose}
//               aria-label="Close"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <CloseIcon />
//                 <Typography variant="caption" align="center" style={{ color: '#B9B9B9', fontSize: "0.6rem" }}>
//                   Close
//                 </Typography>
//               </Stack>
//             </IconButton>
//           </Stack>
//         </Box>
//         <div>
//           {detailPageId === 0 &&
//             <>
//               <div>
//                 <MDBCardBody>
//                   <Form handleSave={handleSave} detailPageId={detailPageId}  />
//                 </MDBCardBody>
//               </div>
//             </>
//           }
//         </div>
//         <div>
//           {detailPageId === 1 &&
//             <>
//               <div>
//                 <MDBCardBody>
//                   <Form handleSave={handleSave} transactionId={transactionId} detailPageId={detailPageId}  />
//                 </MDBCardBody>
//               </div>
//             </>
//           }
//         </div>
//       </React.StrictMode>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  IconButton,
  Typography,
  Stack,
  Alert, // import Alert from MUI
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { MDBCardBody } from "mdb-react-ui-kit";
import Form from "../../component/form/Form";
import { PostData } from "../../api/api";

export default function Detail({ setPage, detailPageId, transactionId }) {
  const [work, setWork] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [tableErrors, setTableErrors] = useState({});
  const [currentError, setCurrentError] = useState("");
  const [change, setChange] = useState(false)

  const handleClose = () => {
    setPage("summary");
  };

  const displayNextError = () => {
    // Display form errors one by one
    const formErrorKeys = Object.keys(formErrors);
    if (formErrorKeys.length > 0) {
      setCurrentError({ type: 'form', key: formErrorKeys[0], message: formErrors[formErrorKeys[0]] });
      return;
    }

    // Display table errors one by one if form errors are resolved
    const tableErrorKeys = Object.keys(tableErrors);
    if (tableErrorKeys.length > 0) {
      const firstTableErrorKey = tableErrorKeys[0];
      setCurrentError({
        type: 'table',
        key: firstTableErrorKey,
        message: tableErrors[firstTableErrorKey],
      });
      return;
    }

    // If no errors are left, clear the current error
    setCurrentError("");
  };

  useEffect(()=>{
   setChange(false)

  },[formErrors,tableErrors])

  const onSubmit = async () => {
    if (Object.keys(formErrors).length > 0 || Object.keys(tableErrors).length > 0) {
      // Show validation errors one by one
      displayNextError();
      setChange(true)
      return;
    }
    try {
      const response = await PostData(work);
      if (response.data.ResultData !== "") {
        const details = JSON.parse(response.data.ResultData);
        setPage("summary");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = (item,fError,tError) => {
    console.log("item",item);
    console.log("errorsf",fError);
    console.log("errorsT",tError);
    if(fError)
    {
      setFormErrors(fError);
    }
    if(tError)
    {
      setTableErrors(tError);
    }
    setWork({ ...work, ...item});
  };

  return (
    <>
      <CssBaseline />
      <React.StrictMode>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: "100%",
            paddingLeft: 1.5,
            paddingRight: 1.5,
            zIndex: 1,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flex: "0 0 auto" }}>
            <IconButton
              onClick={onSubmit}
              aria-label="Save"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon />
                <Typography variant="caption" align="center" style={{ fontSize: "0.6rem", color: '#B9B9B9' }}>
                  Save
                </Typography>
              </Stack>
            </IconButton>

            <IconButton
              onClick={handleClose}
              aria-label="Close"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <CloseIcon />
                <Typography variant="caption" align="center" style={{ color: '#B9B9B9', fontSize: "0.6rem" }}>
                  Close
                </Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Box>

        {/* Show error messages if there are any */}
        {currentError && change && (
          <Box sx={{ padding: "10px" }}>
            <Alert severity="error">
              {/* Display the error based on type */}
              {currentError.type === 'form' && (
                <>
                  Form Error: {currentError.key} - {currentError.message}
                </>
              )}
              {currentError.type === 'table' && (
                <>
                  Table Error at Row {parseInt(currentError.key) + 1}: 
                  {Object.keys(currentError.message).map((field, index) => (
                    <div key={index}>{field} - {currentError.message[field]}</div>
                  ))}
                </>
              )}
            </Alert>
          </Box>
        )}

        <div>
          {detailPageId === 0 && (
            <>
              <MDBCardBody>
                <Form handleSave={handleSave} detailPageId={detailPageId} />
              </MDBCardBody>
            </>
          )}
        </div>
        <div>
          {detailPageId === 1 && (
            <>
              <MDBCardBody>
                <Form handleSave={handleSave} transactionId={transactionId} detailPageId={detailPageId} />
              </MDBCardBody>
            </>
          )}
        </div>
      </React.StrictMode>
    </>
  );
}
