import React from 'react';
import { connect, useSelector } from 'react-redux';
import '../Characters/DetailsComponent.scss';
import uniqid from 'uniqid';

const LocationsDetailsComponent = () => {
	const selectedLocation = useSelector((state) => state.locationReducer.selectedLocation);
	return (
		<div className="details">
			<span className="title-details">Choose what location you want</span>
			{selectedLocation.map((item) => {
				return (
					<ul key={uniqid.process()} className="list-group">
						<li className="item-img">
							{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
							<img
								className="episode-img"
								src="data:image/jpeg;base64,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"
								alt={`image-of-${item.name}`}
							/>
						</li>
						<li className="list-group-item">
							<span>id</span>
							{item.id}
						</li>
						<li className="list-group-item">
							<span>name</span>
							{item.name}
						</li>
						<li className="list-group-item">
							<span>type</span>
							{item.type}
						</li>
						<li className="list-group-item">
							<span>dimension</span>
							{item.dimension}
						</li>
						{item.residents.map((residents) => {
							return (
								<li key={uniqid.process()} className="list-group-item">
									<span>residents</span>
									<a href={residents}>{residents}</a>
								</li>
							);
						})}
						<li className="list-group-item">
							<span>url</span>
							<a href={item.url}>{item.url}</a>
						</li>
						<li className="list-group-item">
							<span>created</span>
							{item.created}
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default connect(null, null)(LocationsDetailsComponent); // connect = connects component with  redux store
