import React from 'react';

function PostImageUploadComponent() {
    return (
        <div>
            <label htmlFor="upload-button">
                <div className="form__filebox">Upload your photo</div>
            </label>
            <input type="file" id="upload-button" style={{ display: 'none' }} />
        </div>
      );
}
export default PostImageUploadComponent;