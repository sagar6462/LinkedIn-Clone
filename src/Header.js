import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png'
					alt=''
				/>

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationIcon} title='Notification' />
				<HeaderOption
					avatar='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
					title='me'
				/>
			</div>
		</div>
	);
}

export default Header;
