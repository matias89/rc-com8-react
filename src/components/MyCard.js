import React, {Component} from 'react';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './MyModal';


const MyCard = props => {
    const {posts,acortar} = props;
    return (
      <div className="row">
      {posts.map(post =>{
        return (
            <div className='col-md-6 p-4'>
              <div className='card border border-success'>
                <div className='card-body'>
                  <h1 className='card-title'>{acortar(post.title,20)}</h1>
                  <MyModal id={post.id} title={post.title} body={post.body}/>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    );
};

export default MyCard;