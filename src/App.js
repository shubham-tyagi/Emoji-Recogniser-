import "./App.css";
import { useState } from "react";

function App() {
	const emojiDictionary = {
		"😊": "Smiling",
		"😳": "disbelief",
		"😔": "sad",
		"🥡": "takeout box",
		"❤️": "love",
		"😑": "annoyance" /** add some more to show how the app now expands when there's new data */,
	};
	// console.log(emojiDictionary["😊"]);
	const [meaning, setMeaning] = useState("");

	const onClickHandler = function (item) {
		setMeaning(emojiDictionary[item]);
	};

	const onInput = function (event) {
		let item = event.target.value;
		setMeaning(emojiDictionary[item]);
	};

	const emojis = Object.keys(emojiDictionary);

	return (
		<div className="app">
			<h1 style={{ textAlign: "center" }}> Emoji Recogniser </h1>
			<input className="usr-inp" onChange={onInput} />
			<h3 class="emojis-meaning">{meaning}</h3>
			<h3 className="emojis-description-header">Emojis We Know</h3>
			<ul className="emoji-list">
				{emojis.map((items) => {
					return (
						<li
							onClick={() => onClickHandler(items)}
							key={items}
							className="emoji-list-item"
						>
							{items}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
