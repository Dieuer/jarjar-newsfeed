import React, { useState } from 'react';
import { MemoizedTextButton } from '../../atoms/button/text-button';
import { MemoizedTextarea } from '../../atoms/input/textarea';
import { MemoizedTextInput } from '../../atoms/input/textinput';

type AddUpdateProps = {
  onSubmitUpdate: (title: string, text: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

export function AddUpdate({ onSubmitUpdate, className, style }: AddUpdateProps) {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

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
    <div className={className} style={style}>
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

      <MemoizedTextButton
        onClick={handleUpdateSubmit}
        text="Add update"
        className={className}
        disabled={!title || !text}
      />
    </div>
  );
}

export const MemoizedAddUpdate = React.memo(AddUpdate);


