import React from 'react';
import './style.css';

const Post = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        width: '500px',
        boxShadow: '0 0 16px rgba(0, 0, 0.5)',
        borderRadius: '6px',
        marginLeft: '20px',
        marginBottom: '30px',
        overflowWrap: 'anywhere',
      }}
    >
      <div className="img-thumb">
        <img src="https://placeimg.com/200/152/tech" alt="dummy" />
      </div>
      <div className="content">
        <p
          style={{
            fontSize: '15px',
            paddingLeft: '20px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
          className="title"
          onClick={() => props.goDetail(props.data.id)}
        >
          {props.data.title}
        </p>
        <p
          style={{
            fontSize: '10px',
            paddingLeft: '20px',
          }}
          className="desc"
        >
          {props.data.body}
        </p>
        <div className='wrapper-button'>
        
        <button
          style={{
          //  marginLeft: '20px',
           cursor: 'pointer'
          }}
          onClick={() => props.update(props.data)}
        >
          Update
        </button>
        <button
          style={{
          //  marginLeft: '20px',
           cursor: 'pointer'
          }}
          onClick={() => props.remove(props.data.id)}
        >
          Remove  
        </button>
        </div>
      </div>
    </div>
  );
};
export default Post;
