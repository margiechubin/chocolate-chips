import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NowPage = () => {
	const getNowItem = ({ title, date = '', description, link, linkText }) => (
		<li
			key={title}
			style={{
				marginTop: '32px',
				borderLeft: '5px solid #037567',
				paddingLeft: '16px',
			}}
		>
			<h3 style={{ display: 'inline' }}>{title}</h3>{date && <span> - {date}</span>}
			<p style={{ marginTop: '12px' }}>{description}</p>
			<div>
				{link && (
					<a href={link} target="_blank" rel="noopener noreferrer">
						{linkText}
					</a>
				)}
			</div>
		</li>
	);
	return (
		<StaticQuery
			query={graphql`
                query SpeakingQuery {
                    dataJson {
                        speaking {
                            title
                            date
                            description
                            link
                            linkText
                        }
                    }
                }
            `}
			render={data => {
				const {
					dataJson: { speaking },
				} = data;
				return (
					<Layout>
						<SEO
							title="Speaking"
							keywords={[`accessibility`, `margie`, `developer`, `react`, `a11y`]}
						/>
						<h2>Past speaking engagements</h2>
						<ul className="List">{speaking && speaking.map(getNowItem)}</ul>
						Want to discuss speaking opportunities? <Link to="/contact/">Contact me</Link>
					</Layout>
				);
			}}
		/>
	);
};

export default NowPage;
