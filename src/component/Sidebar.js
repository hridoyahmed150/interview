import React from 'react';
// import logo from 'https://app.equidesk.com/_assets/images/equidesk.png'; 
import Logo from "./../img/equidesk.png";
import Icon from '@mdi/react'
import { mdiViewDashboard ,mdiEmail , mdiAccountBox , mdiCalendar } from '@mdi/js';

class Sidebar extends React.Component {
	

	render() {
		return (
			<div className="sidebar">
				<div className='logo' >
					<img src={Logo} />
				</div>
				<div className="icons">

					<Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />
					<Icon path={mdiEmail}
					        title="User Profile"
					        size={1}
					        color="black"
					        />
					<Icon path={mdiAccountBox}
					        title="User Profile"
					        size={1}
					        color="black"
					        />
					<Icon path={mdiCalendar}
					        title="User Profile"
					        size={1}
					        color="black"
					        />
				</div>
				<div class="menu">
					<ul>
						<li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  <span>Dashboard</span> </li>
						
						<li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  
					        <span>Work Order</span> 
					    </li>
					    <li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  
					        <span>Dashboard</span> 
					    </li>
					    <li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  
					        <span>Dashboard</span> 
					    </li>
					    <li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  
					        <span>Dashboard</span> 
					    </li>
					    <li className='active'><Icon path={mdiViewDashboard}
					        title="User Profile"
					        size={1}
					        color="black"
					        />  
					        <span>Dashboard</span> 
					    </li>

						
						</ul>
				</div>

			</div>
		);
	}
}

export default Sidebar;