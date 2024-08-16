import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import Summery from "../container/page/Summery";
import Detail from "../container/page/Detail";




export default function Page() {

  
    const [detailPageId, setdetailPageId] = useState(null)
    const [transactionId, setTransactionId] = useState(null)
    const [page, setpage] = useState("summary")
  return (
    <>
      <Box sx={{ display: "flex" }}>
      <div >
        </div>
        <Box component="main">
           {
        
        page === "summary"  ? ( <Summery  setPage={setpage}  setdetailPageId={setdetailPageId} setTransactionId={setTransactionId} />) :
        page === "detailed" ? (<Detail setPage={setpage} detailPageId={detailPageId} transactionId={transactionId} />) :   
        null
           }
          
        </Box>
      </Box>
    </>
  )
}
