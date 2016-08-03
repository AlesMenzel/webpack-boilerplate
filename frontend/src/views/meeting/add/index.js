var React = require('react');

var MeetingForm = React.createClass({
	list: [{
		label: '1. bod',
		active: true
	}, {
		label: '2. bod',
		active: false
	}, {
		label: '3. bod',
		active: false
	}, {
		label: '4. bod',
		active: false
	}],
	render: function () {
		return (
			<form className="meetingForm">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3>Vytvoření nové schůze</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<input className="meetingForm_date form-control" type="text" defaultValue="2016/04/05"/>
						</div>
						<div className="col-md-6">
							<input className="meetingForm_location form-control" type="text"
								   defaultValue="Prague, Vinohrady, Street 12"/>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h3>Body schůze</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<ul className="nav nav-tabs">
								{this.list.map((item, key) =>
									<li className={item.active ? "active" : null} key={key}>
										<a href={item.link} data-toggle="tab">{item.label}</a>
									</li>
								)}
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<input className="meetingForm__title form-control" type="text"
								   defaultValue="First point of the meeting"/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<textarea className="meetingForm__text form-control" defaultValue="2016/04/05"/>
						</div>
					</div>
				</div>
			</form>
		);
	}
});

module.exports = MeetingForm;