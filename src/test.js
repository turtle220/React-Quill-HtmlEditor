import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import Parser from 'html-react-parser';

class RichTextEditor extends Component {
	constructor(props) {
		super(props);

		this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
          ['clean'],
          ['<>'],

		    ]
		};

		this.formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline',
		    'list', 'bullet',
		    'align',
        'color', 'background',
        '<>'
	  	];

	  	this.state = {
      comments: '',
      content: ''
		}

    this.rteChange = this.rteChange.bind(this);
    
	}

	rteChange = (content, delta, source, editor) => {
		console.log(editor.getHTML()); // rich text
		console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters

    const text = editor.getHTML();
    this.setState ({ content: text });

    console.log("text--------------",text);
	}

  // insertStar = () => {
  //   const cursorPosition = this.quill.getSelection().index
  //   this.quill.insertText(cursorPosition, "★")
  //   this.quill.setSelection(cursorPosition + 1)
  // }

  // onChange(html) {
  // this.setState ({ content: html });
  //   console.log(html,"dd**********************html")
  // }
  // CustomButton = () => <span className="octicon octicon-star" />

	render() {
	    return (
        <>
	      <div>
	        <ReactQuill theme="snow"  modules={this.modules}
            formats={this.formats} onChange={this.rteChange}
            value={this.state.content || ''} />
             {/* <div dangerouslySetInnerHTML={{__html: this.state.content}}></div> */}
	      </div>
      
        {this.state.content}
        </>
	    );
	}

}

export default RichTextEditor;