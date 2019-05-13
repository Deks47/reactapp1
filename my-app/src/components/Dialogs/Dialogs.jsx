import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    return (
        <div className="{s.dialogs}">
            <div className="{s.dialogsItems}">
                <div className="{s.dialog + ' ' + s.active}">
                    <NavLink to="/dialogs/1">John</NavLink>
                    </div>
                <div className="{s.dialog}">
                    <NavLink to="/dialogs/2">James</NavLink>
                </div>
                <div className="{s.dialog}">
                    <NavLink to="/dialogs/3">Kate</NavLink>
                </div>
                <div className="{s.dialog}">
                    <NavLink to="/dialogs/4">Said</NavLink>
                </div>
                <div className="{s.dialog}">
                    <NavLink to="/dialogs/5">Hurley</NavLink>
                </div>
                <div className="{s.dialog}">
                    <NavLink to="/dialogs/6">Jack</NavLink>
                </div>
            </div>
            <div className="{s.messages}">
                <div className="{s.dialog}">Hi</div>
                <div className="{s.dialog}">How are you?</div>
                <div className="{s.dialog}">Allow me introduce myself</div>

            </div>
        </div>

    )
}

export default Dialogs;