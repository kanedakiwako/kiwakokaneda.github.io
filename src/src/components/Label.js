
import React from 'react';

export const Label = () => {
  return (
    <>
      <h1 className="post-title">{window.location.pathname.replace('/', '')}</h1>
      <div className="post-line"></div>
    </>
  )
}