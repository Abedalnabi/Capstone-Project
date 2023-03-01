import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMdContact } from 'react-icons/io';
import STATIC_TEXT from './staticText';
import userType from '../../../enums/enums';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let menuItem;
  if (props.token) {
    menuItem = (
      <div>
        <MenuItem
          onClick={() => {
            handleClose();
            props.goToPath('profile');
          }}
        >
          {STATIC_TEXT.profile}
        </MenuItem>
        {props.userInfo.roleId === userType.gym ? (
          <MenuItem
            onClick={() => {
              handleClose();
              props.goToPath(`dashboard/gym`);
            }}
          >
            {STATIC_TEXT.dashboard}
          </MenuItem>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IoMdContact className="IoMdContact" style={{ height: '40px', width: '36px' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItem}
      </Menu>
    </div>
  );
}
