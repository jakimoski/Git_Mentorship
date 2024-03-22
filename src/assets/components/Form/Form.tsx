import axios from "axios";
import { useEffect, useState } from "react";
import { TUsers } from "../../types/types";
import "./form.css";
import { format } from "date-fns";

export default function Form() {
  const prevItems: [] = JSON.parse(localStorage.getItem("items") || `""`);

  // const [post, setPost] = useState<TCardProps>({} as TCardProps);
  const [users, setUsers] = useState<TUsers[]>([]);

  useEffect(() => {
    // Load all users from api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        // Map users data and update users state with name and id
        setUsers(res.data.map((el: any) => ({ id: el.id, name: el.name })))
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (event: any) => {
    event.preventDefault();

    // Get data from form and create an object
    const formData = new FormData(event.target);
    const postData: any = Object.fromEntries(formData.entries());

    // Add missing values to post object
    postData.date = format(new Date(), "MM/dd/yyyy HH:mm:ss");
    postData.id = Math.floor(Math.random() * 1000);

    // Update Local Storage posts
    localStorage.setItem("items", JSON.stringify([...prevItems, postData]));

    // Reset Form
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>Enter a new post</h1>
      <div className="form-row">
        <label htmlFor="title">Post title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          // onChange={(e) => createPost("title", e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Post Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          // onChange={(e) => createPost("description", e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="user">User:</label>
        <select
          name="name"
          id="user"
          required
          // onChange={(e) => createPost("name", e.target.value)}
        >
          <option className="checked" defaultChecked value={""}>
            Select User
          </option>

          {users &&
            users.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="image">Image Url:</label>
        <input
          type="url"
          id="image"
          name="image"
          required
          // onChange={(e) => createPost("image", e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
