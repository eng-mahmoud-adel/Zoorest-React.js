import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

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
  backgroundColor: '#FFF',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  justifyContent: 'center',
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


const DropFile = (props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  return (
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p className= "text-center"><span className= "rounded-circle mx-auto d-block w-50 text-white bg-info">+</span> <span className= "d-block">Upload</span> </p>
      </div>
  );
}

export default DropFile ;
