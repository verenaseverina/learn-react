import React from "react";

const Form = () => {
  return (
    <div className="form-post">
      <h1>Input Post Data</h1>
      <form>
        <div>
          <input type="text" placeholder="Author" name="author"></input>
        </div>
        <div>
          <input type="text" placeholder="Description" name="description"></input>
        </div>
        <div>
          <input type="date" placeholder="Date Time" name="date"></input>
        </div>
        <div>
          <select name="category">
            <option>Select One</option>
            <option value="Article">Article</option>
            <option value="Blog">Blog</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
