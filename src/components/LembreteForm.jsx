/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ReminderForm.js
import React, { useState } from 'react';

const LembreteForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Adicionar lembrete..." />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default LembreteForm;
