import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className="{s.dialogs}">
            <div className="{s.dialogsItems}">
                <div className="{s.dialog}">
                    John
                    </div>
                <div className="{s.dialog}">
                    James
                </div>
                <div className="{s.dialog}">
                    Kate
                </div>
                <div className="{s.dialog}">
                    Said
                </div>
                <div className="{s.dialog}">
                    Hurley
                </div>
                <div className="{s.dialog}">
                    Jack
                </div>
            </div>
            <div className="{s.messages}">
                <div className="{s.messages}">Hi</div>
                <div className="{s.messages}">How are you?</div>
                <div className="{s.messages}">Allow me introduce myself</div>

            </div>
        </div>

    )
}

export default Dialogs;