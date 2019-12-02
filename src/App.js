import React, {Component} from 'react';
import Modal from "./components/Ui/Modal/Modal";
import Alert from "./components/Ui/Alert/Alert";


class App extends Component {
    state = {
        modalShow: false,
    };
    closed = () => {
        this.setState({modalShow: false})
    };
    open = () => {
        this.setState({modalShow: true})
    };
    dismiss = () => {
        alert('closed');
    };

    render() {
        return (
            <div>
                <button onClick={this.open}>Open</button>
                <Modal
                    show={this.state.modalShow}
                    closed={this.closed}
                    title="Some kinda modal title"
                >

                    <p>This is modal content</p>

                </Modal>
                <Alert
                    type="Yellow"
                    dismissed
                    dismiss={this.dismiss}

                >This is a yellow type alert
                </Alert>
                <Alert dismiss={this.dismiss} type="green">This is a green type alert</Alert>


            </div>
        );
    }
}

export default App;