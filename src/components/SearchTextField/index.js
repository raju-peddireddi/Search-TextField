import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem, Divider} from '@mui/material';
import {makeStyles} from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';
import './index.css'
const useStyles = makeStyles({
    container:{
        maxWidth: '302px',
        height: '32px',
        border: '1px solid #EFF0F1',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center'
    },
   searchInput1:{
    height: '16px',
    margin: 4,
    marginLeft: "0.5rem",               
   },
   searchInput2:{
    minWidth: '272px',
    height: '16px',
    margin: 4,
    marginLeft: "0.5rem",               
   },
   searchIcon:{
     width: '11.66px',
     height: '11.66px',
    marginRight: '0.5rem',
    top: '12.5%',
    bottom: '14.63%',
    color: '#9B9FA8',
   },
   select:{
    color: '#050E25',
    width: '118px',
    height: '32px',
    '& .MuiOutlinedInput-root': {
        border: 'none', // Remove the border from the outlined input
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none', // Remove the notched outline border
      },
   },
   divider: {
    '& .css-ftc7wc-MuiDivider-root':{
        height: '70%'
    }
  }
})
const option = [
    { value: "jobNo", label: "Job No.", level: "job" },
    { value: "beSbNo", label: "BE No.", level: "job" },
    { value: "transactionRefNo", label: "Transaction Ref No.", level: "job" },
    { value: "invoiceNo", label: "Invoice No.", level: "invoice" },
    { value: "hawbHblNo", label: "HBL/HAWB No.", level: "job" },
    { value: "sealNo", label: "Seal No.", level: "job" },
    { value: "reimportSbNo", label: "Reimport SB No.", level: "item" },
    { value: "previousBeNo", label: "Reimport Pre BE No.", level: "item" },
  ];
export default function SearchTextField(props) {
    const classes = useStyles()
    const [value, setValue] = useState('');
    const [isTyping, setIsTyping] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {

    let optionValue = (option?.map((data) => { return data.value }))
    setValue(optionValue[0])
    
    
      }, [option])


  const handleChange = (event) => {
    setValue(event.target.value);

  }
  const handleSearchTerm = (event) => {
    if (event.target.value === ''){
        setSearchValue('')
        setIsTyping(false)
    }
    else{
        setSearchValue(event.target.value)
        setIsTyping(true)
    }
    
  }

  const handleClearSearch = () => {
    setSearchValue('')
    setIsTyping(false)
  }

    
  return (
    <div className={classes.container} style = {{backgroundColor: props.dark ? '#242C40' :  props.backgroundColor !== undefined ? '#F6F9FF' :'#FDFEFF'}}>
        {props.dropDown && <Select
            value={value}
            className={classes.select}
            onChange={handleChange}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
              },
              getContentAnchorEl: null,
            }}
            IconComponent={KeyboardArrowDownIcon}
            placeholder='Select'
           >
          
            {option?.map((option) => (
              <MenuItem key = {option.label} value = {option.value}>
                {option.label}
              </MenuItem>
            ))}</Select>}
            {props.dropDown && <Divider sx={{height: '16px', width: '1px', background: '#EFF0F1'}} orientation="vertical" />}
        <div className='input-container'>
        <InputBase
            value={searchValue}
            sx={props.dark ? {color: '#FDFDFD'} : {color: '#050E25'}}
            placeholder="Search"
            className={props.dropDown ? classes.searchInput1 :classes.searchInput2}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchTerm}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />
        {isTyping ? <ClearIcon onClick = {handleClearSearch} className={classes.searchIcon}/> :<SearchIcon className={classes.searchIcon}/>}
        </div>
        
    </div>
  )
}
