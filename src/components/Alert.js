import React from 'react'

export default function Alert(props) {
  const myStyle={
    height: '20px'
  }
  const capitalize = (str)=>{
    if(str==='danger')
    str= 'error'
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
        <div style={myStyle}>
        {props.alert && <div className={`alert alert-dismissible fade show alert-${props.alert.type} `}  role="alert">
        <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
        </div>}
        </div>

  )
}
