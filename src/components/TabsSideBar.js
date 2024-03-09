import React from 'react'

function TabsSideBar({ state, setState }) {

    const changeState = (type) => {
        setState(type)
    }

    return (
        <div role="tablist" className="tabs tabs-boxed py-2">
            <div role="tab" onClick={() => changeState(1)} className={`tab ${state === 1 ? 'tab-active' : ''}`}>عملیات ها</div>
            <div role="tab" onClick={() => changeState(2)} className={`tab ${state === 2 ? 'tab-active' : ''}`}>لیست پهپاد ها</div>
        </div>
    )
}

export default TabsSideBar