import React, { useState } from "react";
import "./Homepage.css";
import profile from "./profile.jpg";
import { PostCard, Button, Modal, PlusIcon, MoyoLogo } from "../components";
import { Link } from "react-router-dom";

const code1 = `import React from 'react';
	import AceEditor from 'react-ace';
	import 'ace-builds/src-noconflict/theme-dracula';
	import 'ace-builds/src-noconflict/mode-javascript';
	
	const CodeEditor = ({ theme, mode, value, ...props }) => {
		return (
			<AceEditor
				mode="javascript"
				theme="dracula"
				value={value}
				height="200px"
			/>
		);
	};
	
	export default CodeEditor;
	`;

const code2 = `import React, { useState } from 'react';
	import './Card.css';
	import CodeEditor from './CodeEditor';
	import PropTypes from 'prop-types';
	
	/**@module components/Button */
	
	const PostCard = ({ text, name, code, datePosted, ...props }) => {
		return (
			<div className="moyo-postcard mb-10">
				<div className="p-12 flex-row col moyo-postcard--header">
					<div className="col-6-12 flex-row">
						Picture <p className="ml-8">{name}</p>
					</div>
					<div className="col-2-12 moyo-postcard-date">
						<small>{datePosted}</small>
					</div>
				</div>
	
				<div className="p-12 moyo-postcard--text mb-20">{text}</div>
	
				<div className="flex-row">
					<section className="code-tab">name.js</section>
				</div>
				<div className="code-view">
					<CodeEditor value={code} />
				</div>
			</div>
		);
	};`;

function Navigation() {
    return (
        <header className="moyo-navigation">
            <ul>
                <Link to="/">
                    <li className="p-12 moyo-navigation-link">
                        <MoyoLogo />
                    </li>
                </Link>

                <Link to="/new">
                    <li className="p-12 moyo-navigation-link">
                        <PlusIcon fill="#000" />
                    </li>
                </Link>

                <li></li>
            </ul>
        </header>
    );
}

function Feed() {
    return (
        <section className="moyo-feed-container">
            <PostCard
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ipsam voluptatem sint id minima ipsum magnam molestiae non
				beatae mollitia obcaecati aliquid temporibus, sed cumque sunt
				laborum voluptates eaque? Sit repudiandae aut officiis
				reiciendis non, minus quibusdam consequuntur hic iste officia
				excepturi, possimus debitis vero corporis fugiat et impedit
				totam maxime?"
                profilePicture={profile}
                name={"Desmond Nyamador"}
                datePosted={"20th June"}
                likes={20}
                comments={10}
                code={{
                    "main.js": code1,
                    "second.js": code2,
                }}
                likeCount={4040}
                commentCount={340}
                isLiked={true}
            />
        </section>
    );
}

function Aside() {
    return (
        <div className="moyo-aside">
            <p>Aside</p>
        </div>
    );
}
function Homepage() {
    return (
        <div className="moyo-home">
            <Navigation />
            <Feed />
            <Aside />
        </div>
    );
}

export default Homepage;
export { Navigation };
