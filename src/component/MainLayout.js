import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class MainLayout extends React.Component {
	render() {
		return (
			<div className="mainlayout">
				 <Sidebar />
				 <Content />
			</div>
		);
	}
}


export default  MainLayout;