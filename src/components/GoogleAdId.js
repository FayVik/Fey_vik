import React, { Component } from 'react';
import PropTypes from 'prop-types';

const googleAdId = 'ca-pub-3301294413158355';

class GoogleAd extends Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}
	render() {
		const { classNames, slot } = this.props;
		return (
			<div className={classNames}>
				<ins
					className='adsbygoogle'
					style={{ display: 'inline-block', width: '728px', height: '90px' }}
					data-ad-client={googleAdId}
					data-ad-slot={slot}
					data-ad-format='auto'
					data-full-width-responsive='true'
				></ins>
			</div>
		);
	}
}

GoogleAd.propTypes = {
	classNames: PropTypes.string,
	slot: PropTypes.string,
	timeout: PropTypes.number,
};

GoogleAd.defaultProps = {
	classNames: '',
	slot: '3120755964',
	timeout: 200,
};

export default GoogleAd;
