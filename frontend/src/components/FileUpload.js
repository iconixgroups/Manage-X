import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(res.data);
    } catch (err) {
      let errorMessage = 'Failed to upload the file.';
      if (err.response) {
        switch(err.response.status) {
          case 400:
            errorMessage = 'Invalid file format or data.';
            break;
          case 404:
            errorMessage = 'The requested resource was not found.';
            break;
          case 500:
            errorMessage = 'There was a problem with the server.';
            break;
          default:
            errorMessage = err.response.data.msg || errorMessage;
        }
      }
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type='file' id='customFile' onChange={onChange} />
          <label htmlFor='customFile'>{filename}</label>
        </div>

        <input type='submit' value='Upload' />
      </form>
    </div>
  );
};

export default FileUpload;