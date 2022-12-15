import React, { Component } from "react";
import "./TodoApp.css";
import ListTodo from "../../components/TodoAppExample/ListTodo/ListTodo";
import TodoFilter from "../../components/TodoAppExample/TodoFilter/TodoFilter";
import Header from "../../components/TodoAppExample/Header/Header";
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [
        { id: 1, content: 'ăn sáng', isActive: true, isComplete: false },
        { id: 2, content: 'ăn trưa', isActive: true, isComplete: false },
        { id: 3, content: 'ăn tối', isActive: false, isComplete: true },
      ],
    };
  }

  deleteItem = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
  }

  addItem = () => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: [
        ...prevState.listTodos,
        {
          id: 10,
          content: prevState.content,
          isActive: false,
          isComplete: false,
        },
      ],
    }));
  }

  handleContent = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };

  activeFilter = () => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.isActive === true) {
          return it;
        }
      }),
    }));
  }

  completeFilter = () => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.isComplete === true) {
          return it;
        }
      }),
    }));
  }

  allFilter = () => {
    this.setState((prevState) => ({
      ...prevState,

      }),
    );
  }
  render() {
    return (
      <section className="todoapp">
        <div data-reactid=".0">
          <Header
            addItem={this.addItem}
            handleContent={this.handleContent}
          />
          <section className="main" data-reactid=".0.1">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              data-reactid=".0.1.0"
            />
            <label htmlFor="toggle-all" data-reactid=".0.1.1" />
            <ul className="todo-list" data-reactid=".0.1.2">
              {this.state.listTodos.map((item) => {
                return (
                  <ListTodo
                    key={item.id}
                    content={item.content}
                    isActive={item.isActive}
                    isComplete={item.isComplete}
                    deleteItem={() => this.deleteItem(item)}
                  />
                )
              })}
            </ul>
          </section>

          <TodoFilter
            activeFilter={this.activeFilter}
            completeFilter={this.completeFilter}
            allFilter={this.allFilter}
          />
        </div>
      </section>
    );
  }
}
