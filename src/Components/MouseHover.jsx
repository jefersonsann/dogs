import React from 'react';

const MouseHover = () => {
  const [visible, setVisible] = React.useState(false); // initiate it at false

  return (
    <div>
      <h2
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Move Mouse Towards Me
      </h2>
      {visible && ( // you can use "&&" since there is no else in this case
        <div>Text to show</div>
      )}
    </div>
  );
};

export default MouseHover;
