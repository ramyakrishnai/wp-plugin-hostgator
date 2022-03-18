import AppStore from '../../data/store';
import { ErrorCard, Heading } from '../../components';
import {
	hostgatorSettingsApiFetch,
	dispatchUpdateSnackbar,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import snappyUrl from '../../../../assets/svg/snappy-holding-site-left.svg';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';

const ComingSoonSection = () => {
	const { store, setStore } = useContext(AppStore);
	const [isError, setError] = useState(false);
	const [comingSoon, setComingSoon] = useState(store.comingSoon);
	const [wasComingSoon, setWasComingSoon] = useState(false);

	const getComingSoonHeadline = () => {
		return comingSoon
			? __('Coming Soon', 'wp-plugin-hostgator')
			: __('Site Launched!', 'wp-plugin-hostgator');
	};
	const getComingSoonBody = () => {
		return comingSoon
			? __(
					'Your site currently displays a coming soon page to visitors. Once you have finished setting up your site, be sure to launch it so your visitors can reach it.',
					'wp-plugin-hostgator'
			  )
			: __(
					'Congratulations! You just successfully launched your site! Visitors will now see the site, you can easily undo this and restore the coming soon page if you are not ready.',
					'wp-plugin-hostgator'
			  );
	};
	const getComingSoonGraphicClass = () => {
		return comingSoon ? 'section-graphic' : 'section-graphic reverse';
	};
	const getComingSoonButton = () => {
		return comingSoon ? (
			<Button
				variant="primary"
				icon="yes-alt"
				onClick={() => {
					setComingSoon(() => false);
					setWasComingSoon(() => true);
				}}
			>
				{__('Launch Site', 'wp-plugin-hostgator')}
			</Button>
		) : (
			<>
				<Button
					variant="secondary"
					icon="no-alt"
					onClick={() => {
						setComingSoon(() => true);
						setWasComingSoon(() => true);
					}}
				>
					{__('Restore Coming Soon', 'wp-plugin-hostgator')}
				</Button>
				<Button
					variant="link"
					onClick={() => {
						setComingSoon(() => false);
						setWasComingSoon(() => false);
					}}
				>
					{__('Dismiss', 'wp-plugin-hostgator')}
				</Button>
			</>
		);
	};
	const getComingSoonNoticeText = () => {
		return comingSoon
			? __('Coming soon activated.', 'wp-plugin-hostgator')
			: __('Coming soon deactivated.', 'wp-plugin-hostgator');
	};

	useUpdateEffect(() => {
		hostgatorSettingsApiFetch({ comingSoon }, setError, (response) => {
			setStore({
				...store,
				comingSoon,
			});
			dispatchUpdateSnackbar(getComingSoonNoticeText());
			comingSoonAdminbarToggle(comingSoon);
		});
	}, [comingSoon]);

	if (isError) {
		return (
			<section className="hgwp-section coming-soon">
				<ErrorCard error={isError} className="hgwp-section-card" />
			</section>
		);
	}
	// render nothing if coming soon is not active or not just launched
	if (!(comingSoon || (!comingSoon && wasComingSoon))) {
		return <></>;
	}
	return (
		<section className="hgwp-section hgwp-section-coming-soon">
			<img
				src={snappyUrl}
				className={getComingSoonGraphicClass()}
				style={{ top: 0 }}
				alt={__(
					'HostGator`s Snappy holding site',
					'hostagtor-wordpress-plugin'
				)}
			/>
			<Card size="large" className="hgwp-section-card">
				<CardHeader>
					<Heading level="3">{getComingSoonHeadline()}</Heading>
				</CardHeader>
				<CardBody>{getComingSoonBody()}</CardBody>
				<CardFooter>{getComingSoonButton()}</CardFooter>
			</Card>
		</section>
	);
};

export default ComingSoonSection;
