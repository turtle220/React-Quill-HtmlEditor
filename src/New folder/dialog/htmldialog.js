import React, { useState } from 'react'

import { HtmlEditorModal } from '.';

function HtmlDialog(props) {

    const [code, setCode] = useState(props.html)
    const onClose = (ok = true)=>{
        if(ok)
            window.htmlEditorContentHtmlString = code;
        else
            window.htmlEditorContentHtmlString = null;

        HtmlEditorModal.close('htmldialog')()
    }
  
    return (
        <>
            <div className="close" onClick={HtmlEditorModal.close('htmldialog')}>
            <svg height="9" fill="#686F75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
                <path d="M10 11a1 1 0 0 1-.73-.3L.3 1.76A1 1 0 0 1 1.76.3l8.94 8.94A1 1 0 0 1 10 11z"></path>
                <path d="M1 11a1 1 0 0 1-.7-1.76L9.24.3a1 1 0 0 1 1.46 1.46L1.76 10.7A1 1 0 0 1 1 11z"></path>
            </svg>
            </div>
            <div id="htmldialog" className="htmldialog">
                
                <div className = 'titlebar'>
                    <span>Html Editor</span>    
                    <span onClick={()=>onClose(false)}>X&nbsp;</span>    
                </div>
                <textarea onChange={(e)=>setCode(e.target.value)} id='htmldialog_content'></textarea>
                <div className='footBar'>
                    <button className="button1" value='Ok' onClick={()=>onClose(true)}>OK</button>
                    <button value='Cancel' onClick={()=>onClose(false)}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default HtmlDialog;