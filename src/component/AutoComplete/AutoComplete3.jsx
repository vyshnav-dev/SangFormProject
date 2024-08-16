import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Typography,
  ListSubheader,
  Paper,
} from "@mui/material";
import { secondryColor } from "../../config";

const AutoComplete3 = ({
  formData,
  setFormData,
  autoId,
  autoLabel,
  isMandatory,
  disabled,
}) => {

  const [iTypeF2, setiTypeF2] = useState(1);
  const [AutoMenu, setAutoMenu] = useState([]);
  const [autoSearchKey, setautoSearchKey] = useState("");
  const [sCodeReq, setsCodeReq] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  // Predefined array of objects to replace API data
  const staticData = [
    { sName: "High", iId: 1, sCode: "001" },
    { sName: "Medium", iId: 2, sCode: "002" },
    { sName: "Low", iId: 3, sCode: "003" },
    // Add more objects as needed
  ];

  useEffect(() => {
    setAutoMenu(staticData);
  }, []);

  // Effect to sync state with prop changes
  useEffect(() => {
    setautoSearchKey(formData?.sName || "");
    if (formData?.sName)
      setFormData({
        ...formData,
        sName: formData?.sName ?? null,
        iId: formData?.iId ?? null,
      });
  }, []);

  const handleAutocompleteChange = (event, newValue) => {
    const updatedFormData = {
      ...formData,
      sName: newValue ? newValue.sName : null,
      iId: newValue ? newValue.iId : null,
    };

    setFormData(updatedFormData);
    setiTypeF2(1);
  };

  useEffect(() => {
    if (AutoMenu && AutoMenu[1]?.sCode) {
      setsCodeReq(true);
    }
  }, [AutoMenu]);

  return (
    <Autocomplete
      disabled={disabled}
      PaperComponent={({ children }) => (
        <Paper style={{ minWidth: "150px", maxWidth: "300px" }}>
          {children}
        </Paper>
      )}
      id={autoId}
      options={AutoMenu}
      getOptionLabel={(option) => option?.sName ?? ""}
      value={
        AutoMenu.find((option) => option?.sName.trim() === formData?.sName) ||
        null
      }
      onChange={handleAutocompleteChange}
      filterOptions={(options, { inputValue }) => {
        return options.filter(
          (option) =>
            option.sName?.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.sCode?.toLowerCase().includes(inputValue.toLowerCase())
        );
      }}
      onInputChange={(event, newInputValue) => {
        setautoSearchKey(newInputValue);
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography style={{ marginRight: "auto", fontSize: "12px" }}>
              {option.sName}
            </Typography>
            {option.sCode && (
              <Typography style={{ marginLeft: "auto", fontSize: "12px" }}>
                {option.sCode}
              </Typography>
            )}
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          required={isMandatory}
          {...params}
          label={autoLabel}
          error={error.isError}
          helperText={error.isError ? error.message : null}
          InputProps={{
            ...params.InputProps,
            autoComplete: "off",
            style: {
              borderColor: "transparent",
              borderStyle: "solid",
              fontSize: "12px",
              height: "36px",
              padding: "0px 25px 0px 10px",
              margin: 0,
            },
            inputProps: {
              ...params.inputProps,
              autoComplete: "off",
              onKeyDown: (event, newValue) => {
                if (event.key === "F2") {
                  const updatedFormData = {
                    ...formData,
                    sName: newValue ? newValue?.sName : "",
                    iId: newValue ? newValue?.iId : 0,
                  };
                  setFormData(updatedFormData);
                  setautoSearchKey("");
                  setiTypeF2((prevType) => (prevType === 1 ? 2 : 1));
                  event.preventDefault();
                }
              },
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "16px",
              padding: "0 0px",
              zIndex: 1,
            },
          }}
          sx={{
            paddingTop: "13px",
            "& .MuiOutlinedInput-input": {
              padding: "8px 14px",
              transform: "translate(0px, 0px) scale(1)",
            },
            "& .MuiInputBase-input": {
              fontSize: "0.75rem",
            },
            "& .MuiInputLabel-outlined": {
              transform: "translate(14px, 22px) scale(0.85)",
            },
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
              transform: "translate(14px, 6px) scale(0.75)",
              padding: "0px 2px",
            },
          }}
        />
      )}
      ListboxComponent={(props) => (
        <ul style={{ paddingTop: 0 }} {...props}>
          <ListSubheader
            style={{ backgroundColor: secondryColor, padding: "5px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography style={{ marginRight: "auto" }}>Name</Typography>
              {sCodeReq && (
                <Typography style={{ marginLeft: "auto" }}>Code</Typography>
              )}
            </div>
          </ListSubheader>
          {props.children}
        </ul>
      )}
      style={{ width:200, marginBottom:'12px'}}
    />
  );
};

export default AutoComplete3;


