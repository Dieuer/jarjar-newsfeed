import React, { memo, useState } from 'react';
import { MemoizedButton } from '../../atoms/button/button';
import { MemoizedTextarea } from '../../atoms/input/textarea';
import { Update } from '../../../datatypes/datatypes';
import { MemoizedTextInput } from '../../atoms/input/textinput';

type TAddUpdate = {
  onSubmitUpdate: (title: string, text: string) => void;
  className?: string;
};

export function AddUpdate({ onSubmitUpdate, className }: TAddUpdate) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleUpdateSubmit = () => {

    onSubmitUpdate(title, text);
    setTitle('');
    setText('');
  };

  return (
    <div className={className}>
      <MemoizedTextInput
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
        className={className}
      />

      <MemoizedTextarea
        value={text}
        placeholder="Description"
        onChange={handleTextChange}
        className={className}
      />

      <MemoizedButton onClick={handleUpdateSubmit} text="Add update" className={className} />
    </div>
  );
}

export const MemoizedAddUpdate = React.memo(AddUpdate);


