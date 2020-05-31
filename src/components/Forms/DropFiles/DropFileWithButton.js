import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import Button from '../../Buttons/Button/Button';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '140px',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#FAFAFA',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    justifyContent: 'center',
  };

const DropFileWithButton = (props) => {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const style = useMemo(() => ({
    ...baseStyle
  }));

  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone', style})}>
        <input {...getInputProps()} />
        <div className= "col-8 text-center">
          <p>Drag 'n' drop some files here</p>
          <Button text= "Choose" color= "btn btn-info" size= "btn-sm" onClick={open} />
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default DropFileWithButton;
