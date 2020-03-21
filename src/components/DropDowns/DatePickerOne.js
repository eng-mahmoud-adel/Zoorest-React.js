import React, {useState} from "react";
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const InlineDateTimePickerDemo = (props) => {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                value={selectedDate}
                onChange={handleDateChange}
                onError={console.log}
                disablePast
                format="yyyy/MM/dd HH:mm"
            />
        </MuiPickersUtilsProvider>
    );
};

export default InlineDateTimePickerDemo;

