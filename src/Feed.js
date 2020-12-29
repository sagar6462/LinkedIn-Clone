import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalenderViewIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: "Sagar Sharma",
			description: "This is the Test",
			message: input,
			photoUrl: "",
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOption Icon={SubscriptionIcon} title='Video' color='#E7A33E' />
					<InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOption
						Icon={CalenderViewIcon}
						title='Write Article'
						color='#7FC15E'
					/>
				</div>
			</div>
			{/* {posts} */}

			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</div>
	);
}

export default Feed;
