import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'First Point', label: 'First Point' },
  { value: 'Second Point', label: 'Second Point' },
  { value: 'Third Point', label: 'Third Point' },
  { value: 'Fourth Point', label: 'Fourth Point' }
];

class DropDownTwo extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default DropDownTwo;