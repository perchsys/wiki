import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import '../styles/HomePage.css';

const UploadContent = () => {

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.success(`${info.file.name} file uploaded.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // Perform the login functionality here, such as making an API call
    // to validate the credentials and redirect the user accordingly.

    if (category === 'General Information') {
      window.location.href = 'UploadContent';
    } else if (category === 'Natural Resources') {
      window.location.href = 'UploadContent';
    } else if (category === 'Place of Heritage') {
      window.location.href = 'UploadContent';
    } else if (category === 'Inspiring People') {
      window.location.href = 'UploadContent';
    }
    else if (category === 'Traditional Vocational Skils') {
        window.location.href = 'UploadContent';
      } else if (category === 'Arts & Culture') {
        window.location.href = 'UploadContent';
      } else if (category === 'Development Initiative') {
        window.location.href = 'UploadContent';
      }
  };

  return (
    <div>
        <center>
        <h3>Mention Your Category</h3>
        <div>
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Type</option>
              <option value="General Information">General Information</option>
              <option value="Natural Resources">Natural Resources</option>
              <option value="Place of Heritage">Place of Heritage</option>
              <option value="Inspiring People">Inspiring People</option>
              <option value="Traditional Vocational Skils">Traditional Vocational Skils</option>
              <option value="Arts & Culture">Arts & Culture</option>
              <option value="Development Initiative">Development Initiative</option>
            </select>
          </label>
          <br />
        </div>
        <br />
      </center>
      <div>
        <center>
         
          <input placeholder="*Title" />
          <br /><br />
          <div className="mb-3">
            <textarea placeholder="*Description" name="message" rows="7" cols="70" required></textarea>
          </div>
        </center>
      </div>
      <Upload.Dragger {...props}>
        <div></div>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
        </p>
      </Upload.Dragger>
      <div className="align">
        <center><button onClick={handleSubmit}>Submit</button></center>
      </div>
      
    </div>
  );
};

export default UploadContent;
