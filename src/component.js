import React, {useState} from "react";
import PropTypes from "prop-types";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import HTMLEditModal from "./components/HTMLEditModal";
// import HtmlDialog from "./dialog/htmldialog";
// import { HtmlEditorModal }  from './dialog/index';

import AlertDialog from './components/MaterialModal';

const  ArticleEditor = (props) => {
  const [contentHTML, setContentHTML] = useState('');
  // const [isModalOpen, ] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  let content = contentHTML;
  const modules = {
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
            setContentHTML(content);
            // openModal();
            // setOpen(true);
            openModal();
          },
      },

    }
  }
  const onChangeText = (html, delta, source, editor) => {
    content = html;
  }

  // const getEditValue =(val) => {
  //   setContentHTML(val);
  //   content = val;
  // }

  return (
    <React.Fragment>
      <ReactQuill
        modules={modules}
        theme="snow"
        value={contentHTML}
        onChange={onChangeText}
      />
      {/* React Strap Modal */}
      <AlertDialog 
        isOpen={isModalOpen}
        contentHTML={contentHTML}
        close={closeModal}
      />
      
      {/* <HTMLEditModal
        isOpen={isModalOpen}
        close={closeModal}
        contentHTML={contentHTML}
        getValue={getEditValue}
      /> */}

      {/* Class Component */}
      {/* <HtmlEditorModal id="htmldialog">
        <HtmlDialog html={contentHTML} />
      </HtmlEditorModal> */}
    </React.Fragment>
  )
  
}

ArticleEditor.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default ArticleEditor;
