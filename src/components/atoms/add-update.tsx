import React, { memo, useState } from 'react'

type TAddUpdate = {
  onSubmit: (update: string) => void;
}
export function AddUpdate({ onSubmit }: TAddUpdate) {

  const [update, setUpdate] = useState<string>('');

  const handleUpdateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdate(event.target.value);
  };

  const handleUpdateSubmit = () => {
    onSubmit(update)
    setUpdate('')
  }

  return (
    <div className='jar-jar'>
      <textarea
        className='form-control'
        value={update}
        onChange={handleUpdateChange}
      >
      </textarea>

      <button
        className='btn btn-primary btn-sm pull-right'
        onClick={handleUpdateSubmit}
      >
        Add update
      </button>
    </div>
  )
}

export const MemoizedAddUpdate = React.memo(AddUpdate)
