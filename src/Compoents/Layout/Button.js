import React from 'react'

export default function Button({
    text = "",
    onClick = () => { },
    btn = "",
    size = "md",
    disabled = false,
    className = "",
    icon = "",
    onMouseEnter = () => { },
    onMouseLeave = () => { },
    style = {},
}) {
    return (
        <>
            <button className={`btn btn-${btn} px-2 py-1 m-1 ${className} `} style={style} onClick={onClick} disabled={disabled} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> {icon}{text}</button>
        </>
    )
}
