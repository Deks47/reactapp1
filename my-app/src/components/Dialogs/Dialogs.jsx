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

    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'James'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Said'},
        {id: 5, name: 'Hurley'},
        {id: 6, name: 'Jack'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Allow me introduce myself'},

    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);


    return (
        <div className="{s.dialogs}">
            <div className="{s.dialogsItems}">

                {dialogsElements}


            </div>
            <div className="{s.messages}">
                {messagesElements}


            </div>
        </div>

    )
}

export default Dialogs;