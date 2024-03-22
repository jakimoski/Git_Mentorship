import axios from "axios";
import { useEffect, useState } from "react";
import { TCardProps, TUsers } from "../../types/types";
import { format } from "date-fns";
import "./form.css";

export default function Form() {
  const prevItems: [] = JSON.parse(localStorage.getItem("items") || `""`);

  const [post, setPost] = useState<TCardProps>({} as TCardProps);
  const [users, setUsers] = useState<TUsers[]>([]);

  const createPost = (key: string, value: string) => {
    setPost((prevPost) => ({ ...prevPost, [key]: value }));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        setUsers(res.data.map((el: any) => ({ id: el.id, name: el.name })))
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData: any = Object.fromEntries(formData.entries());
    postData.date = format(new Date(), "MM/dd/yyyy HH:mm:ss");
    postData.id = Math.floor(Math.random() * 1000);
    localStorage.setItem("items", JSON.stringify([...prevItems, postData]));

    event.target.reset();
  };

  console.log(post);
  console.log(prevItems);

  //TODO Send post to locall storage

  return (
    <form className="form" onSubmit={submitHandler}>
      <h2>Enter a new post</h2>
      <div className="form-row">
        <label htmlFor="title">Post title:</label>
        <input
          type="text"
          id="title"
          name="title"
          // onChange={(e) => createPost("title", e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Post title:</label>
        <input
          type="text"
          id="description"
          name="description"
          // onChange={(e) => createPost("description", e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="user">Post title:</label>
        <select
          name="user"
          id="user"
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
        <label htmlFor="image">Post title:</label>
        <input
          type="url"
          id="image"
          name="image"
          // onChange={(e) => createPost("image", e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
