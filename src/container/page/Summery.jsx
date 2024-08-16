
// import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack } from '@mui/material';
// import {  Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
// import AddIcon from "@mui/icons-material/Add";
// import { DataGrid } from '@mui/x-data-grid';





// const DefaultIcons = ({ iconsClick}) => {
//     return (
//         <Box sx={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>

//             <IconButton
//                 aria-label="New"
//                 sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//                 onClick={() => iconsClick("new")}
//             >
//                 <Stack direction="column" alignItems="center">
//                     <AddIcon style={{ color: '#B9B9B9', }} />
//                     <Typography
//                         variant="caption"
//                         align="center"
//                         style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
//                     >
//                         New
//                     </Typography>
//                 </Stack>
//             </IconButton>
//             <IconButton
//                 aria-label="New"
//                 sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//                 onClick={() => iconsClick("edit")}
//             >
//                 <Stack direction="column" alignItems="center">
//                     <EditIcon sx={{ color: '#B9B9B9', }} />
//                     <Typography
//                         variant="caption"
//                         align="center"
//                         style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
//                     >
//                         Edit
//                     </Typography>
//                 </Stack>
//             </IconButton>
//             <IconButton
//                 aria-label="New"
//                 sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//                 onClick={() => iconsClick("delete")}
//             >
//                 <Stack direction="column" alignItems="center">
//                     <DeleteIcon sx={{ color: '#B9B9B9', }} />
//                     <Typography
//                         variant="caption"
//                         align="center"
//                         style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
//                     >
//                         Delete
//                     </Typography>
//                 </Stack>
//             </IconButton>
//             {/* <Example/> */}
//         </Box>
//     );
// };

// import { useEffect, useState } from 'react';
// import { GetSummery } from '../../api/api';
// import Table from '../../component/table/Table';



// export default function Summery({setPage,setdetailPageId,setTransactionId}) {

//     const columns = [
//         { field: 'iTransId', headerName: 'Transaction ID', width: 150 },
//         { field: 'sDocNo', headerName: 'Document Number', width: 200 },
//         { field: 'Date', headerName: 'Date', width: 150 },
//         { field: 'Project', headerName: 'Project', width: 200 },
//         { field: 'sLocation', headerName: 'Location', width: 150 },
//         // Add other columns as needed
//       ];

//     const [data, setData] = useState([]);
//     const [selectedRow, setSelectedRow] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await GetSummery();
//         if (response.data.ResultData !== "") {
//           setData(JSON.parse(response.data.ResultData));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

    

    
    
//     const handleIconsClick = (value) => {
//         switch (value) {
//             case "new":
//                 handleAdd("new")
//                 break;
//             case "edit":
//                 if (selectedRow) {
//                     handleEdit(selectedRow.iTransId);
//                 }
//                 break;
//             case "close":
//                 handleclose()
//             default:
//                 break;
//         }
//     }
//     const handleCloseModal = () => {
//         setEdit(0)
//         setIsModalOpen(false);
//     };

//     const handleclose = () => {
//         window.history.back();
//     }
//     const handleOpen = () => {
//         // setOpen(true);
//     };


//     // Handlers for your icons
//     // const handleAdd = (value) => {
//     //     if (value === "edit") {
//     //         setdetailPageId(1)
//     //     }
//     //     else {
//     //         setdetailPageId(0)
//     //     }
//     //     setPage("detailed")
//     // };
//     const handleAdd = () => {
//         setdetailPageId(0);
//         setPage("detailed");
//     };

//     const handleEdit = (id) => {
//         setdetailPageId(1);
//         setTransactionId(id)
//         setPage("detailed");
//     };

//     const handleDelete = (id) => {
//         // Your logic to delete profile
//     };

//     const handleClose = () => {
//         // Your logic to close the component or dialog
//     };
//   return (
//     <>
//     <Box sx={{ display: "flex", flexDirection: "column", width: "100%"}}>
//         <Box sx={{
//             display: "flex", width: "100%", flexDirection: "row", justifyContent: "end", paddingLeft: 1.5,
//             paddingRight: 1.5,
//         }}>
//             <DefaultIcons iconsClick={handleIconsClick} />

//         </Box>

//         <Box sx={{ maxWidth:'1400px'}}>
//         {/* <Table columns={columns} rows={data} onRowSelected={setSelectedRow} /> */}
//         <Box sx={{
//           width: "100%",
//           padding: "0px 10px ",
//           minHeight: "590px",
//           display: 'flex',
//           justifyContent: 'center'
//         }}>
//         <DataGrid
//            rows={data}
//            columns={columns}
//            getRowId={(row) => row.iTransId}
//            initialState={{
//              pagination: {
//                paginationModel: { page: 0, pageSize: 10 },
//              },
//            }}
//            pageSizeOptions={[10, 20]}
//            checkboxSelection
//            onRowSelectionModelChange={(newSelection) => {
//                if (newSelection.length > 0) {
//                    const selectedId = newSelection[0];
//                    const selectedRowData = data.find(row => row.iTransId === selectedId);
//                    setSelectedRow(selectedRowData);
//                } else {
//                    setSelectedRow(null);
//                }
//            }}
//         />
//       </Box>
//         </Box>
//         </Box>
//     </>
//   )
// }


import {
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Box,
    Typography,
    Stack
  } from '@mui/material';
  import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Close as CloseIcon
  } from '@mui/icons-material';
  import AddIcon from "@mui/icons-material/Add";
  import { DataGrid } from '@mui/x-data-grid';
  import { useEffect, useState } from 'react';
  import { GetSummery } from '../../api/api';
  
  const DefaultIcons = ({ iconsClick }) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: { xs: "10px", sm: "5px" },
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="New"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          onClick={() => iconsClick("new")}
        >
          <Stack direction="column" alignItems="center">
            <AddIcon style={{ color: '#B9B9B9' }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
            >
              New
            </Typography>
          </Stack>
        </IconButton>
  
        <IconButton
          aria-label="Edit"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          onClick={() => iconsClick("edit")}
        >
          <Stack direction="column" alignItems="center">
            <EditIcon sx={{ color: '#B9B9B9' }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
            >
              Edit
            </Typography>
          </Stack>
        </IconButton>
  
        <IconButton
          aria-label="Delete"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          onClick={() => iconsClick("delete")}
        >
          <Stack direction="column" alignItems="center">
            <DeleteIcon sx={{ color: '#B9B9B9' }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: '#B9B9B9', fontSize: "0.6rem" }}
            >
              Delete
            </Typography>
          </Stack>
        </IconButton>
      </Box>
    );
  };
  
  export default function Summery({ setPage, setdetailPageId, setTransactionId }) {
  
    const columns = [
      { field: 'iTransId', headerName: 'Transaction ID', width: 150 },
      { field: 'sDocNo', headerName: 'Document Number', width: 200 },
      { field: 'Date', headerName: 'Date', width: 150 },
      { field: 'Project', headerName: 'Project', width: 200 },
      { field: 'sLocation', headerName: 'Location', width: 150 },
    ];
  
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await GetSummery();
          if (response.data.ResultData !== "") {
            setData(JSON.parse(response.data.ResultData));
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleIconsClick = (value) => {
      switch (value) {
        case "new":
          handleAdd();
          break;
        case "edit":
          if (selectedRow) {
            handleEdit(selectedRow.iTransId);
          }
          break;
        case "close":
          handleclose();
          break;
        default:
          break;
      }
    };
  
    const handleCloseModal = () => {
      setEdit(0);
      setIsModalOpen(false);
    };
  
    const handleclose = () => {
      window.history.back();
    };
  
    const handleAdd = () => {
      setdetailPageId(0);
      setPage("detailed");
    };
  
    const handleEdit = (id) => {
      setdetailPageId(1);
      setTransactionId(id);
      setPage("detailed");
    };
  
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "start",
              padding: { xs: "10px", sm: 1.5 },
            }}
          >
            <DefaultIcons iconsClick={handleIconsClick} />
          </Box>
  
          <Box sx={{ maxWidth: '1400px', margin: "auto", padding: { xs: "10px", sm: "20px" } }}>
            <Box
              sx={{
                width: "100%",
                padding: { xs: "5px 5px", sm: "0px 10px" },
                minHeight: "590px",
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.iTransId}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[10, 20]}
                checkboxSelection
                onRowSelectionModelChange={(newSelection) => {
                  if (newSelection.length > 0) {
                    const selectedId = newSelection[0];
                    const selectedRowData = data.find(row => row.iTransId === selectedId);
                    setSelectedRow(selectedRowData);
                  } else {
                    setSelectedRow(null);
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </>
    );
  }
  