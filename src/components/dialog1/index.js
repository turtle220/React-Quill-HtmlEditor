import './index.css';

class Dialog{
    static show(id) {
        return new Promise((resolve, reject)=>{
            // popup dialog
            const ele = window.$('#'+id);
            ele.plainModal('open')
            document.getElementById(id).retValue = '';

            const checkDialog = ()=>{
                const ele = document.getElementById(id);
                if(ele && ele.style.display!=='none'){
                    setTimeout(checkDialog, 500)
                    return;
                }
                if(ele && ele.retValue!==''){
                    resolve(ele.retValue)
                    return;
                }
                // reject('No return value in HtmlDialog');
            }
            setTimeout(checkDialog, 500);
        })
    }
}
export default Dialog;