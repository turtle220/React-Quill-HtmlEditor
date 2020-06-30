import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { HtmlEditorModal }  from './components/dialog'
import HtmlDialog  from './components/dialog/htmldialog'

class ArticleEditor extends React.Component {
  state = {
    contentHTML:''
  }
  modules = {
    toolbar: {
      container: [
        [{ font: [] }, { header: [1, 2, 3, 4, 5, 6] }],
        [{ align: [] }, "direction"],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "super" }, { script: "sub" }],
        // ["blockquote", "code-block"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        ["code"]
      ],
      handlers: {
        code:
          async() => {
            document.getElementById('htmldialog_content').value = this.state.contentHTML;
           
            const ret = await HtmlEditorModal.open('htmldialog')();
            this.setState({contentHTML: ret})
            // window.localStorage.getItem('retVal')

            // console.log('ddd: ',window.localStorage.getItem('retVal'))
            // this.setState({contentHTML:window.localStorage.getItem('retVal')})
            // this.setState({contentHTML:'sdfsdf'})
            
          },
      },

    }
  }
  onChangeText = (html, delta, source, editor) => {
    this.setState({contentHTML: html})
  }
  render() {
    return <>
      <ReactQuill
        modules={this.modules}
        theme="snow"
        value={this.state.contentHTML}
        onChange={this.onChangeText}
      ></ReactQuill>
      <HtmlEditorModal id="htmldialog">
        <HtmlDialog html={this.state.contentHTML} />
      </HtmlEditorModal>
      </>
  }
}

ArticleEditor.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  setAlert: state.setAlert,
});

export default ArticleEditor;
