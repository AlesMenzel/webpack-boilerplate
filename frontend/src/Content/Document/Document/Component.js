/* Components */

/* Styles */
import './styles/sass/base.scss'

/* Images */

const Document = ({id, name, url, size, state, onDeleteHandler}) => {
	return (
		<div className="table__row document__row">
			<div className="table__cell document__col-id">
				{id}
			</div>
			<div className="table__cell document__col-name">
				{name}
			</div>
			<div className="table__cell document__col-url">
				{url}
			</div>
			<div className="table__cell document__col-size">
				{size}
			</div>
			<div className="table__cell document__col-state">
				{(() => {
					let className = '';
					let text = 'Ano';
					switch (state) {
						case 1:
							className = '';
							text = '';
							break;
						case 2:
							className = 'fa fa-check-circle-o state__icon-success';
							text = 'Ano';
							break;
						case 3:
							className = 'fa fa-check-circle-o state__icon-error';
							text = 'Ne';
							break;
						default:

					}
					return (
						<div className="state">
							<i className={className}></i>
							{text}
						</div>
					);
				})()}
			</div>
			<div className="table__cell document__col-actions">
				<button className="btn btn-xs btn-default item__action-edit">Upravit</button>
				<button className="btn btn-xs btn-danger item__action-remove" onClick={() => onDeleteHandler({id})}>
					Smazat
				</button>
			</div>
		</div>
	)
}

export default Document
