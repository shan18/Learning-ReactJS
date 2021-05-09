import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    // This listener was create by native JS thus during event bubbling
    // this will be executed first
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      // This is done because if this component is unmounted then the
      // listener will still be active and point to null element
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div className="ui form" ref={ref}>
        <div className="field">
          <label className="lable">Select a Color</label>
          <div
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
