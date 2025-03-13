import { MenuItem } from 'primeng/api';

export const MENU_BAR_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    badge: '3',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B',
      },
      {
        separator: true,
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U',
      },
    ],
  },
];
