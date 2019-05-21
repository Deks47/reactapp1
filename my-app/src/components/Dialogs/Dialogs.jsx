import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className="{s.dialog + ' ' + s.active}">
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className="{s.dialog}">{props.message}</div>
}

const Dialogs = (props) => {

let dialogsData = [
    {id: 1, name: 'John'},
    {id: 2, name: 'James'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Said'},
    {id: 5, name: 'Hurley'},
    {id: 6, name: 'Jack'},
]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Allow me introduce myself'},

    ]

    return (
        <div className="{s.dialogs}">
            <div className="{s.dialogsItems}">

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />



            </div>
            <div className="{s.messages}">
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />




            </div>
        </div>

    )
}

export default Dialogs;