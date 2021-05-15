export interface Benefits{
    id: string;
    icon: string;
    label: string;
}

export const benefitsList: Benefits[] = [
    { id : 'flexibility', icon: '/assets/Benefits/Ic_Hour.svg', label: 'Flexibilidad Horaria' },
    { id : 'home_office', icon: '/assets/Benefits/Ic_HomeOffice.svg', label: 'Home Office' },
    { id : 'workshops', icon: '/assets/Benefits/Ic_Workshops.svg', label: 'Capacitaciones y whorkshops' },
    { id : 'snacks', icon: '/assets/Benefits/Ic_DrinkSnacks.svg', label: 'Snacks, Frutras y bebidas gratis' },
    { id : 'laptop', icon: '/assets/Benefits/Ic_laptop.svg', label: 'Semana Remota' },
    { id : 'brain', icon: '/assets/Benefits/Ic_brain.svg', label: 'Trabajar en ultimas Tecnologias' }
];
