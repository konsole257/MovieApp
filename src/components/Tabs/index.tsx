import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.css';

interface TabProps {
	label: string;
	link: string;
}

interface TabContentProps {
	id: string;
	children?: React.ReactNode;
}

interface TabsProps {
	tabs?: TabProps[];
	children?: React.ReactNode;
}

export const Tab = ({ label, link }: TabProps) => {
	return (
		<>
			<li className="tab-item">
				<NavLink className="tab-link" to={link}>
					{label}
				</NavLink>
			</li>
		</>
	);
};

export const TabContent = ({ id, children }: TabContentProps) => {
	return (
		<>
			<div className="tab-content" id={id}>
				{children}
			</div>
		</>
	);
};

export const Tabs = ({ tabs, children }: TabsProps) => {
	const childTabs: React.ReactNode[] = [];
	const childTabContents: React.ReactNode[] = [];

	React.Children.toArray(children).forEach(child => {
		if (React.isValidElement(child)) {
			if (child.type === Tab) {
				childTabs.push(child);
			} else if (child.type === TabContent) {
				childTabContents.push(child);
			}
		}
	});

	return (
		<>
			<ul className="tab-list">
				{tabs?.map((tab, idx) => (
					<Tab key={idx} label={tab.label} link={tab.link} />
				))}

				{childTabs}
			</ul>

			{childTabContents.length > 0 && (
				<div className="tab-contents">{childTabContents}</div>
			)}
		</>
	);
};
