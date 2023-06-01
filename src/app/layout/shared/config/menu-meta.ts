import { MenuItem } from '../models/menu.model';

// menu items for two column menu layout 
const TWO_COl_MENU_ITEMS: MenuItem[] = [
    {
        key: 'layouts',
        icon: 'home',
        label: 'Layouts',
        isTitle: false,
        link: '/tools'
    }
];

// menu items for horizontal layout
const HORIZONTAL_MENU_ITEMS: MenuItem[] = [

];

export { TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };