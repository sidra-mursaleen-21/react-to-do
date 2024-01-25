import { useState } from "react";
import "./index.css";
import Input from "./components/inputComponent";

function App() {
  const [back, setBack] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);
  const [modal, setModal] = useState(false);
  const [objectIndex, setobjectIndex] = useState();

  return (
    <>
      <div className="mainContainer">
        <div className="todoContainer">
          {back ? (
            <>
              {modal ? (
                <div className="modalContainer">
                  <div className="modal">
                    <button onClick={() => setModal(!modal)} className="back">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <div className="changeInput">
                      <Input
                        onChange={(e) => setTitle(e.target.value)}
                        label="title"
                        placeholder="write a new title"
                      />
                      <Input
                        onChange={(e) => setDescription(e.target.value)}
                        label="description"
                        placeholder="write a new description"
                      />
                    </div>
                    <div className="save">
                      <button
                        onClick={() => {
                          todo[objectIndex].description = description;
                          todo[objectIndex].title = title;
                          setModal(!modal);
                        }}
                      >
                        save
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <button onClick={() => setBack(!back)} className="back">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  {todo.map((object, index) => {
                    return (
                      <div key={index} className="todo">
                        <h2>{object.title}</h2>
                        <p>{object.description}</p>
                        <div className="buttonContainer">
                          <button
                            onClick={() => {
                              setobjectIndex(index);
                              setModal(!modal);
                            }}
                          >
                            edit
                          </button>
                          <button
                            onClick={() => {
                              const duplicate = [...todo];
                              duplicate.splice(index, index + 1);
                              setTodo(duplicate);
                            }}
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          ) : (
            <>
              <div className="imageContainer">
                <h1>to-do-list</h1>
                <img
                  width={"100px"}
                  height={"100px"}
                  src="/image1.png"
                  alt=""
                />
              </div>
              <div className="inputContainer">
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  label="title"
                  placeholder="write your title"
                />
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  label="description"
                  placeholder="write your description"
                />
              </div>
              <div className="save">
                <button onClick={() => setBack(!back)}>all todoes</button>
                <button
                  onClick={() => {
                    setBack(!back);
                    todo.push({
                      description: description,
                      title: title,
                    });
                  }}
                >
                  save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
