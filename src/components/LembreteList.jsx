/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ReminderList.js
import React from 'react';
import LembreteItem from './LembreteItem';

const LembreteList = ({ reminders, onDelete }) => {
  return (
    <ul>
      {reminders.map((reminder) => (
        <LembreteItem key={reminder.id} reminder={reminder} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default LembreteList;
