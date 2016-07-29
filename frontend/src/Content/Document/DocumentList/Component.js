/* Components */
import Document from '../Document/Component'

/* Styles */
import './styles/sass/base.scss'

/* Images */

const DocumentList = ({documents, onDocumentDeleteHandler}) => {
	return (
		<div>
			{documents.map((document) => {
				return (
					<Document
						key={document.id}
						{...document}
						onDeleteHandler={onDocumentDeleteHandler}
					/>
				)
			})}
		</div>
	)
}

export default DocumentList
