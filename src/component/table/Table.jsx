


import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function Table({ columns, rows, onRowSelected }) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '0px 10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.iTransId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSize={10}
        pageSizeOptions={[10]}
        checkboxSelection
        onRowClick={(params) => {
          onRowSelected(params.row);
        }}
      />
    </Box>
  );
}


