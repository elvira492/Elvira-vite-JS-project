import * as tools from './tools';
import { PageHome } from './pages/PageHome';
import { PageBrands } from './pages/PageBrands';
import { PageMission } from './pages/PageMission';
import { PageCareers } from './pages/PageCareers';
import { PageContact } from './pages/PageContact';
import { Page404 } from './pages/Page404';

const pageNames = ['Home','Brands', 'Mission', 'Careers', 'Contact'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'home':
			return PageHome();
		case 'brands':
			return PageBrands();
		case 'mission':
			return PageMission();
		case 'careers':
			return PageCareers();
        case 'contact':
            return PageContact();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul id="menu-list">
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}