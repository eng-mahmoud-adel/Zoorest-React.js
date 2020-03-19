import React, { useState } from "react";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";

const InlineDateTimePickerDemo = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
    </>
  );
}

export default InlineDateTimePickerDemo;

