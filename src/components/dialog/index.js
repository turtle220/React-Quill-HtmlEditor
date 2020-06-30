import React from 'react';
import PropTypes from 'prop-types'
import './index.css'

const propTypes = {
    id: PropTypes.string.isRequired
};

class HtmlEditorModal extends React.Component {
    
    static modals = [];

    static open = (id) => (e) => {
        return new Promise((resolve, reject)=>{
            // open modal specified by id
            let modal = HtmlEditorModal.modals.find(x => x.props.id === id);
            modal.setState({ isOpen: true });
            document.body.classList.add('jw-modal-open');
            const getDialogClose = ()=>{
                if(modal.state.isOpen){
                    setTimeout(getDialogClose, 500);
                    return;
                }
                if(window.htmlEditorContentHtmlString)
                    resolve(window.htmlEditorContentHtmlString)
                else
                    reject()
            }
            setTimeout(getDialogClose, 500);
        })

    }

    static close = (id) => (e) => {
        let modal = HtmlEditorModal.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: false });

        document.body.classList.remove('jw-modal-open');
    }

    constructor(props) {
        super(props);

        this.state = { isOpen: false };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // add this modal instance to the modal service so it's accessible from other components
        HtmlEditorModal.modals.push(this);
    }

    componentWillUnmount() {
        // remove this modal instance from modal service
        HtmlEditorModal.modals = HtmlEditorModal.modals.filter(x => x.props.id !== this.props.id);
        this.element.remove();
    }

    handleClick(e) {
        // close modal on background click
        if (e.target.className === 'jw-modal') {
            HtmlEditorModal.close(this.props.id)(e);
        }
    }
    
    render() {
        return (
            <div style={{display: + this.state.isOpen ? 'block' : 'none'}} onClick={this.handleClick} ref={el => this.element = el}>
                <div className="jw-modal">
                    <div className="modalContent noBackground">
                        {this.props.children}
                    </div>
                </div>
                <div className="jw-modal-background"></div>
            </div>
        );
    }
}

HtmlEditorModal.propTypes = propTypes;

export { HtmlEditorModal };