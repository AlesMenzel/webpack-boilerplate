import { connect } from 'react-redux'
import { addDocument, removeDocument, editDocument } from './model/actions'
import DocumentList from './Component'

const mapStateToProps = (state) => {
	return {
		documents: state.document
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDocumentDeleteHandler: (payload) => {
			dispatch(addDocument(payload))
		},
		onDocumentAddHandler: (payload) => {
			dispatch(removeDocument(payload))
		},
		onDocumentEditHandler: (payload) => {
			dispatch(editDocument(payload))
		}
	}
}

const DocumentListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DocumentList)

export default DocumentListContainer
