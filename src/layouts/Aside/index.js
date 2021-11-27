import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

import EllipseIconButton from '../../components/EllipseIconButton';

function AsideTitle(props) {
    const title = props.title;
    return (
        <div className='aside-title'>
            <Typography component="span" variant="subtitle2">
                {title}
            </Typography>
        </div>
    );
}

function AsideMenu(props) {
    let menus = [];
    const menuList = props.menuList;

    menuList.forEach((item) => {
        menus.push(
            <MenuItem key={item.name}>
                {item.icon}
                <Typography component="span" variant="body2">
                    {item.name}
                </Typography>
            </MenuItem>
        )
    })

    return (
        <div className='aside-menu'>
            <MenuList
                id="composition-menu"
                aria-labelledby="composition-button"
            >
                {menus}
            </MenuList>
        </div>
    )
}

function AsideBottom(props) {
    return (
        <div className='aside-bottom'>
            <EllipseIconButton startIcon={<CheckIcon />} text='Success' />
            <EllipseIconButton startIcon={<DeleteIcon />} text='Success' />
        </div>
    )
}

export default function Aside(props) {
    const MEMULIST = [
        {
            name: 'Day Todo',
            icon: <WbSunnyIcon fontSize='small' />,
        },
        {
            name: 'Recently',
            icon: <WbSunnyIcon fontSize='small' />,
        },
        {
            name: 'Clock',
            icon: <WbSunnyIcon fontSize='small' />,
        },
    ];
    return (
        <aside className='layout-aside'>
            <AsideTitle title='Code Life' />
            <AsideMenu menuList={MEMULIST}></AsideMenu>
            <AsideBottom />
        </aside>
    );
}