import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/cover/487.jpg?v=1575095450'
					alt=''
				/>
				<Avatar className='sidebar__avatar' />
				<h2>Sagar Sharma</h2>
				<h4>sagaarpkr@gmail.com</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2.543</p>
				</div>
				<div className='sidebar__stat'>
					<p>Vies on Post</p>
					<p className='sidebar__statNumber'>2.545</p>
				</div>
			</div>
			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem("ReactJs")}
				{recentItem("Programming")}
				{recentItem("Software Engineering")}
				{recentItem("Design")}
				{recentItem("Developer")}
			</div>
		</div>
	);
}

export default Sidebar;
