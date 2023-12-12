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
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
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