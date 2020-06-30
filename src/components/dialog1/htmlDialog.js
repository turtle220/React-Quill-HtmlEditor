import React, {useState} from 'react';
const HtmlDialog = (props) => {
    const [code, setCode] = useState(props.html)
    const onClose = ()=>{
        window.$('#htmldialog').plainModal('close');
    }
    return (<div id='htmldialog' className='htmldialog'>
                <div className = 'titlebar'>
                    <span>Html Editor</span>    
                    <span onClick={onClose}>X&nbsp;</span>    
                </div>
                <textarea onChange={(e)=>setCode(e.target.value)} id='htmldialog_content'></textarea>
                <div className='footBar'>
                    <button className="button1" value='Ok' onClick={()=>{document.getElementById('htmldialog').retValue = code; onClose();}}>OK</button>
                    <button value='Cancel' onClick={()=>{document.getElementById('htmldialog').retValue = ''; onClose();}}>Cancel</button>
                </div>
            </div>)
}

export default HtmlDialog;
