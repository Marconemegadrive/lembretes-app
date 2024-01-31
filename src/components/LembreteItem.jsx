/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ReminderItem.js
import React from 'react';

const LembreteItem = ({ reminder, onDelete }) => {
  return (
    <li>
      {reminder.text}
      <button onClick={() => onDelete(reminder.id)}>Excluir</button>
    </li>
  );
};

export default LembreteItem;
