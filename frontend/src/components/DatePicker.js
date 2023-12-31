import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker 
      selected={selectedDate} 
      onChange={date => setSelectedDate(date)} 
      dateFormat='dd/MM/yyyy'
      isClearable
      placeholderText='Select a date'
    />
  );
};

export default DatePick;