import React from 'react'

function ZoneTabs({ typeZone, setTypeZone }) {


    const changeState = (type) => {
        setTypeZone(type)
    }

    return (
        <div className="mt-4">
            <p>راهنمای دسته بندی مناطق : </p>
            <div role="tablist" className="tabs tabs-bordered my-4">
                <div role="tab" onClick={() => changeState(1)} className={`tab ${typeZone === 1 ? 'tab-active' : ''}`}>ممنوع</div>
                <div role="tab" onClick={() => changeState(2)} className={`tab ${typeZone === 2 ? 'tab-active' : ''}`}>خطرناک</div>
                <div role="tab" onClick={() => changeState(3)} className={`tab ${typeZone === 3 ? 'tab-active' : ''}`}>احتیاط</div>
                <div role="tab" onClick={() => changeState(4)} className={`tab ${typeZone === 4 ? 'tab-active' : ''}`}>مجوز</div>
                <div role="tab" onClick={() => changeState(5)} className={`tab ${typeZone === 5 ? 'tab-active' : ''}`}>آزاد</div>
            </div>
        </div>
    )
}

export default ZoneTabs