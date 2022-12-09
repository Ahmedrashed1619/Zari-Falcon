import React from 'react';
import { Switch } from 'antd';



export default function ItemSettings({configname , inputvalue , action}) {
    return (
        <>
            <tr>
                <td>{configname}</td>
                <td><input type="text" className='form-control w-25 bg-transparent text-center mx-auto' value={inputvalue}/></td>
                <td>{action === true || action === false ? <Switch defaultChecked={action}/> : <button className='btn black-btn px-4'>Edit</button>} </td>
            </tr>
        </>
    )
}
