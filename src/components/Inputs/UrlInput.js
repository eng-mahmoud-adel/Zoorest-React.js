import React from 'react';

const UrlInput = () => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text url-text">https://</span>
            <input type="text" className="form-control" placeholder="lstore.graphics" />
        </div>
    )
}

export default UrlInput;
