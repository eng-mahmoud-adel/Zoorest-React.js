import React, {useEffect, useMemo, useState} from 'react';
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
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


const DropFileWithButton = (props) => {
    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps, open} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt={file.name}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const style = useMemo(() => ({
        ...baseStyle
    }));

    return (
        <div className="container">
            <div {...getRootProps({className: 'dropzone', style})}>
                <input {...getInputProps()} />
                <div className="col-8 text-center">
                    <p>Drag 'n' drop some files here</p>
                    <Button text="Choose" color="btn btn-info" size="btn-sm" onClick={open}/>
                </div>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </div>
    );
}

export default DropFileWithButton;
