/* Components */
import React from 'react';
import { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget, DragSource } from 'react-dnd';
import CategoryListContainer from '../CategoryList/Container'

/* Styles */
import './styles/sass/base.scss'

/* Images */

const cardTarget = {
	drop(props, monitor, component) {
		if (!monitor.didDrop()) {

			const source = monitor.getItem()
			const dragIndex = source.index;
			const hoverIndex = props.index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

			// Get vertical middle
			const upperLimit = (hoverBoundingRect.bottom - hoverBoundingRect.top) * 1/3;
			const lowerLimit = (hoverBoundingRect.bottom - hoverBoundingRect.top) * 2/3;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;

			if (hoverClientY < upperLimit || hoverClientY > lowerLimit) {
				return;
			}

			console.log("TARGET ID: ", props.id)
			props.onNest(source.id, props.id)
		}
	},
	hover(props, monitor, component) {
		const source = monitor.getItem()
		const dragIndex = source.index;
		const hoverIndex = props.index;

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return;
		}

		// Determine rectangle on screen
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

		// Get vertical middle
		const upperLimit = (hoverBoundingRect.bottom - hoverBoundingRect.top) * 1/3;
		const lowerLimit = (hoverBoundingRect.bottom - hoverBoundingRect.top) * 2/3;

		// Determine mouse position
		const clientOffset = monitor.getClientOffset();

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%

		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < lowerLimit) {
			return;
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > upperLimit) {
			return;
		}

		//
		if (source.parent !== props.parent) {
			props.onNest(source.id, props.id)
		}

		// Time to actually perform the action
		props.onMove(source.id, props.id);

		monitor.source.index = hoverIndex;
	}
}

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
			onMove: props.onMove,
			onNest: props.onNest,
			parent: props.parent
		};
	},
	endDrag(props, monitor, component) {}
}

@DropTarget('CATEGORY', cardTarget, connect => ({
	connectDropTarget: connect.dropTarget()
}))
@DragSource('CATEGORY', cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
export default class Category extends Component {
	static propTypes = {
		// Injected by React DnD:
		connectDropTarget: PropTypes.func.isRequired,
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired
	}

	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
		const {
			id,
			name,
			count,

			isActive,
			isRoot,

			onClick,
			onRemove,
		} = this.props;

		const className = 'docs__category-item'
			+ (isRoot ? ' docs__category-item-main' : '')
			+ (isActive ? ' docs__category-item--active' : '')

		return connectDragSource(connectDropTarget(
			<li className="docs__category" style={{ opacity: isDragging ? 0.5 : 1 }}>
				<span className={className}>
					<input className="docs__category-name" type="text" defaultValue={`[${id}] ` + name}
					       onClick={() => onClick(id)}/>
					<span className="fa fa-times-circle-o docs__category-action-delete"
					      onClick={() => onRemove(id)}></span>
					<i className="fa fa-pencil docs__category-action-edit"></i>
					<span className="docs__category-count">{count}</span>
				</span>

				<CategoryListContainer
					root={false}
					parent={id}
				/>
			</li>
		))
	}
}
