import React, { Component } from 'react';
import PostForm from './PostForm';

const parentDiv = {
align: 'center',
margin: '0px auto auto auto',
textAlign: 'center',
}




class Gly extends Component {
render() {
	return (
	<div style={parentDiv}>
	<h1 style={{color:'#8A2482'}}>Pics <span
	style={{color: '#248A6E'}}>Villa</span>
	</h1>
	
	<p>One place stop for all kinds of images</p>

	<hr></hr>
	<h1>All Posts</h1>
	<div
	style={{ width: '50%', margin: '0px auto' }}
	>
	<h2>{localStorage.getItem('title')}</h2>
	<img src={localStorage.getItem('image')}
	alt={'C - language'}
	/>
	<p style={{width: '50%', margin: '0px auto'}}
	>{localStorage.getItem('message')}</p>

	</div>

	<PostForm />
	</div>

	);
}
}

export default Gly;
