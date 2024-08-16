// import * as React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Box } from "@mui/material";
// import { useState } from "react";
// import dayjs from "dayjs";

// const customTheme = createTheme({
//   components: {
//     MuiInputBase: {
//       // Targeting the input component
//       styleOverrides: {
//         input: {
//           fontSize: "0.80rem", // Reduce font size
//           padding: "0px", // Adjust padding as needed
//         },
//         root: {
//           width: "250px",
//           height: "30px", // Ensure TextField takes the full height of its parent
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         outlined: {
//           // Adjusting the outlined label style
//           transform: "translate(14px, 6px) scale(0.85)", // Label position when not shrunk
//           "&.MuiInputLabel-shrink": {
//             transform: "translate(14px, -10px) scale(0.75)", // Label position when shrunk
//             backgroundColor: "#fff",
//             padding: "0 2px",
//           },
//         },
//       },
//     },
//   },
// });

// export default function Datepicker({
//   formData,
//   setFormData,
//   formDataName,
//   label,
//   disableFuture
// }) {

//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (newValue) => {
//     const newDate = dayjs(newValue);

//     setFormData({
//       ...formData,
//       [formDataName]: newDate.format("DD-MM-YYYY"),
//     });
//   };
//   return (
//     <ThemeProvider theme={customTheme}>
//       <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
//         <Box sx={{ minWidth: "100%", maxWidth: "100%", height: "auto" }}>
//           <DatePicker
//             slotProps={{
//               actionBar: {
//                 actions: ["accept", "cancel"],
//               },
//             }}
//             views={["year", "month", "day"]}
//             label={label}
//             value={selectedDate}
//             onChange={handleDateChange}
//             format="DD-MM-YYYY"
//             disableFuture={disableFuture}
//           />
//         </Box>
//       </LocalizationProvider>
//     </ThemeProvider>
//   )
// }

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import dayjs from "dayjs";

const customTheme = createTheme({
  components: {
    MuiInputBase: {
      // Targeting the input component
      styleOverrides: {
        input: {
          fontSize: "0.80rem", // Reduce font size
          padding: "0px", // Adjust padding as needed
        },
        root: {
          width: "250px",
          height: "30px", // Ensure TextField takes the full height of its parent
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          // Adjusting the outlined label style
          transform: "translate(14px, 6px) scale(0.85)", // Label position when not shrunk
          "&.MuiInputLabel-shrink": {
            transform: "translate(14px, -10px) scale(0.75)", // Label position when shrunk
            backgroundColor: "#fff",
            padding: "0 2px",
          },
        },
      },
    },
  },
});

export default function Datepicker({ value, onChange, label, disableFuture }) {
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Box sx={{ minWidth: "100%", maxWidth: "100%", height: "auto" }}>
          <DatePicker
            slotProps={{
              actionBar: {
                actions: ["accept", "cancel"],
              },
            }}
            views={["year", "month", "day"]}
            label={label}
            value={value ? dayjs(value, "YYYY-MM-DD") : null}
            onChange={(newValue) => onChange(newValue ? newValue.format("YYYY-MM-DD") : '')}
            format="YYYY-MM-DD"
            disableFuture={disableFuture}
          />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

