import React, { Component } from 'react';


class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    What do you need to do today?
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TodoInput />
        )
    }

}

export default Main;
