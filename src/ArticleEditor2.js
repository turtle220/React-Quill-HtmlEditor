import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import ReactDOM, { render } from "react-dom";
import axios from "axios";
import "../../styles/components/dashboard/main.scss";

import Select from "react-select";
//import { colourOptions } from "../data";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//import { htmlEditButton } from "../../../node_modules/quill-html-edit-button/src/quill.htmlEditButton.js"; //"./quill.htmlEditButton.js";

//ReactQuill.register("modules/htmlEditButton", htmlEditButton);

export default function ArticleEditor() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("example")); // you can watch individual input by pass the name of the input

  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const modules = {
    toolbar: [
      [{ header: [3, 4, 5, 6] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "super" }, { script: "sub" }],
      ["blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="row gutters">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title ">ARTICLE</div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label for="title">Title</label>

                <input
                  type="text"
                  name="title"
                  id="title"
                  ref={register({ required: true })}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="subtitle">Subtitle</label>

                <input
                  type="text"
                  name="subtitle"
                  id="subtitle"
                  ref={register({ required: true })}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="inputReadOnly">Slug</label>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">
                      https://ecourbanhub.com/
                    </span>
                  </div>
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    ref={register}
                    className="form-control"
                  />
                </div>
              </div>
              <label for="text">Text</label>
              <div className="form-group">
                <ReactQuill
                  modules={modules}
                  //onChange={handleChange}
                  theme="snow"
                  name="text"
                  ref={register({ required: true })}
                  id="text"
                />
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="date">Date</label>
                  <DatePicker
                    selected={startDate}
                    timeInputLabel="Time:"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeSelect
                    timeIntervals={10}
                    onChange={(date) => setStartDate(date)}
                    peekNextMonth
                    ref={register}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    name="date"
                    className="form-control"
                    id="date"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="author">Author</label>
                  <select
                    className="form-control"
                    name="author"
                    id="author"
                    ref={register}
                  >
                    <option value="Paul Münzner">Paul Münzner</option>
                    <option value="Andrea Durrheim">Andrea Durrheim</option>
                    <option value="Bridget Monk">Bridget Monk</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="article-id">Article ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="article-id"
                    value="65798673216"
                    readonly
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="tags">Tags</label>
                  <Select
                    defaultValue={[colourOptions[2], colourOptions[1]]}
                    isMulti
                    name="tags"
                    options={colourOptions}
                    id="tags"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    ref={register}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="category">Category</label>
                  <Select
                    isMulti
                    name="category"
                    options={colourOptions}
                    id="category"
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-title ">SEO</div>
              <div className="card-body"> </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="keyword">Keyword</label>
                  <input
                    className="form-control"
                    name="keyword"
                    type="text"
                    ref={register}
                  />
                </div>
              </div>
              <textarea name="text" ref={register} />
              <input
                className="form-control"
                name="keyword"
                type="text"
                ref={register({ required: true })}
              />
              {errors.keyword && <p>Provide a keyword</p>}
              <label>Example</label>
              <input name="example" defaultValue="test" ref={register} />
              <label>ExampleRequired</label>
              <input
                name="exampleRequired"
                ref={register({ required: true, maxLength: 1 })}
              />
              {errors.exampleRequired && <p>This field is required</p>}
              <input type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
