
import React from 'react';
import DatePicker from 'react-mobile-datepicker';


class Reloj extends React.Component {
    state = {
        time: new Date(),
        isOpen: false,
    }

    handleClick = () => {
        this.setState({ isOpen: true });
    }

    handleCancel = () => {
        this.setState({ isOpen: false });
    }

    handleSelect = (time) => {
        this.setState({ time, isOpen: false });
    }

    render() {
        return (
            <div className="App">
                <a
                    className="select-btn"
                    onClick={this.handleClick}>
                    select time
                    </a>
                <DatePicker
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    onSelect={this.handleSelect}
                    onCancel={this.handleCancel} />
            </div>
        );
    }
}


export default Reloj;