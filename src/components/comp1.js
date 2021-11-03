import React, { useState, useCallback } from 'react'
import './style.css'

const Comp = () => {

    const [text, setText] = useState('hi i am comp')

    const onClick = useCallback(() => {
        setText(`${Math.random()}`)
    }, [])

    return (
        // <div className='title' onClick={onClick} >{text}</div>
        <ul>
            <li>bvjds</li>
            <li>bvjds</li>
            <li>bvjds</li>
        </ul>
    )
}

export default React.memo(Comp)
