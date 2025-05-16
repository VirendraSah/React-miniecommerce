function Bluebutton({ButtonName, Onclick}){
    return(
        <button onClick={Onclick} className='text-[#fff] text-[14px] bg-[#2563eb] py-1 px-4 rounded-sm cursor-pointer'>{ButtonName}</button>
    )
}

function RedButton({ButtonName,Onclick}){
    return(
        <button onClick={Onclick} type="button" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded text-[14px] px-4 py-1 me-2 dark:bg-red-600 dark:hover:bg-red-700 cursor-pointer">{ButtonName}</button>
    )
}

function DefaultButton({ButtonName,Onclick}){
    return(
        <button onClick={Onclick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-[14px] px-4 py-1 me-2 dark:bg-blue-600 dark:hover:bg-blue-700">{ButtonName}</button>
    )
}

export {Bluebutton, RedButton, DefaultButton}