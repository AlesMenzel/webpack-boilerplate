var React = require('react');

var MeetingList = React.createClass({
	getInitialState: function() {
		return {
			items: [
				{
					id: 1,
					date: '20. 7. 2016, 19:30',
					location: '563 Lawrence Street Nashua, NH 03060',
					state: 1,
				}, {
					id: 2,
					date: '12. 8. 2016, 17:30',
					location: '912 Warren Street North Bushwick, VA 08902',
					state: 2,
				}, {
					id: 3,
					date: '20. 9. 2016, 19:30',
					location: '980 Creek Road Hainess City, FL 05404',
					state: 3,
				},{
					id: 4,
					date: '20. 7. 2016, 19:30',
					location: '563 Lawrence Street Nashua, NH 03060',
					state: 1,
				}, {
					id: 5,
					date: '12. 8. 2016, 17:30',
					location: '912 Warren Street North Bushwick, VA 08902',
					state: 2,
				}, {
					id: 6,
					date: '20. 9. 2016, 19:30',
					location: '980 Creek Road Hainess City, FL 05404',
					state: 3,
				}
			]
		};
	},
	render: function() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 header">
							<h3 className="header__title">Seznam schůzí</h3>
							<button className="btn btn-sm btn-primary header__button">
								<i className="fa fa-bolt header__button-icon"></i>
								Nová schůze
							</button>
						</div>
					</div>
					<div className="row header">
						<div className="col-md-1 header__sortable-item header__id">
							# ID
							<i className="fa fa-angle-down header__order"></i>
						</div>
						<div className="col-md-2 header__sortable-item header__date header__date--active">
							Datum konání
							<i className="fa fa-angle-down header__order"></i>
						</div>
						<div className="col-md-3 header__sortable-item header__location">
							Místo konání
							<i className="fa fa-angle-down header__order"></i>
						</div>
						<div className="col-md-2 header__sortable-item header__points">
							Body
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
					{this.state.items.map((item) => {
						return (
							<div className="row item" key={item.id}>
								<div className="col-md-1 item__id">
									{item.id}
								</div>
								<div className="col-md-2 item__date item__date--active">
									{item.date}
								</div>
								<div className="col-md-3 item__location">
									{item.location}
								</div>
								<div className="col-md-2 item__points">
									<i className="fa fa-info points__icon"></i>
									Informace
								</div>
								<div className="col-md-2 item__state">
									{(() => {
										let className = '';
										switch (item.state) {
											case 1:
											case 2:
											case 3:
												className = 'fa fa-check-circle-o state__icon-success';
												break;
											default:

										}
										return (
											<div className="state">
												<i className={className}></i>
												Dokončeno
											</div>
										);
									})()}
								</div>
								<div className="col-md-2 item__actions">
									<button className="btn btn-xs btn-primary item__action-record">Záznam</button>
									<button className="btn btn-xs btn-default item__action-edit">Upravit</button>
									<button className="btn btn-xs btn-danger item__action-remove">Smazat</button>
								</div>
							</div>
						)
					})}
					<div className="row">
						<div className="col-md-12 pagination">
							<div className="pagination__prev"><i className="fa fa-angle-left pagination__prev-icon"></i>Prev</div>

							<div className="pagination__number">1</div>
							<div className="pagination__number pagination__number--active">2</div>
							<div className="pagination__number">3</div>
							<div className="pagination__number">...</div>

							<div className="pagination__next">Next<i className="fa fa-angle-right pagination__next-icon"></i></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MeetingList;