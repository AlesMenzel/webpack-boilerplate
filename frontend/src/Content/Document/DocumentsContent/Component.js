/* Components */
import SidebarContainer from '../Sidebar/Container'
import DocumentListContainer from '../DocumentList/Container'

/* Styles */
import './styles/sass/base.scss'

/* Images */

const Content = () => (
	<div className="content">
		<div className="box">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 header">
						<h3 className="header__title">Dokumenty</h3>
						<button className="btn btn-sm btn-primary header__button">
							<i className="fa fa-bolt header__button-icon"></i>
							Nový dokument
						</button>
					</div>
				</div>
				<div className="row header">
					<div className="col-md-4">
						<SidebarContainer />
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-1 header__sortable-item header__id">
								# ID
								<i className="fa fa-angle-down header__order"></i>
							</div>
							<div className="col-md-2 header__sortable-item header__date header__date--active">
								Název dokumentu
								<i className="fa fa-angle-down header__order"></i>
							</div>
							<div className="col-md-3 header__sortable-item header__location">
								URL
								<i className="fa fa-angle-down header__order"></i>
							</div>
							<div className="col-md-2 header__sortable-item header__points">
								Velikost
								<i className="fa fa-angle-down header__order"></i>
							</div>
							<div className="col-md-2 header__sortable-item header__state">
								Stav
								<i className="fa fa-angle-down header__order"></i>
							</div>
							<div className="col-md-2 header__actions">
								<i className="fa fa-bolt header__icon"></i>
								Možnosti
							</div>
						</div>

						<DocumentListContainer />

						<div className="row">
							<div className="col-md-12 pagination">
								<div className="pagination__prev"><i
									className="fa fa-angle-left pagination__prev-icon"></i>Prev
								</div>

								<div className="pagination__number">1</div>
								<div className="pagination__number pagination__number--active">2</div>
								<div className="pagination__number">3</div>
								<div className="pagination__number">...</div>

								<div className="pagination__next">Next<i
									className="fa fa-angle-right pagination__next-icon"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Content
