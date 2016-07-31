import React from 'react';
import { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Sidebar from './Sidebar/Sidebar/Component'
import Content from './Content/Document/DocumentsContent/Component'
import Header from './Header/Header/Component'

@DragDropContext(HTML5Backend)
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Sidebar />
				<Content />
			</div>
		)
	}
}
