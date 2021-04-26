import React from "react";
import {Drawer} from "@material-ui/core";
import {useHistory} from "react-router";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
    drawer:{
        width: '10 rem',
    },
    menuIcon:{
        cursor:'pointer',
        display:'flex',
    }
})

const NavPanel =()=>{
    const [isOpen, setIsOpen]=React.useState(false);
    const history=useHistory();
    const classes=useStyles();
    const redirecTo=(path: string, name:string   )=>
        <div onClick={()=>{history.push(path)}}>{name}</div>

    return (
        <div>
            <div className={classes.menuIcon}
                onClick={()=>setIsOpen(!isOpen)}>
                <MenuIcon/>
            </div>
            <Drawer
                open={isOpen}
                onClose={()=>{setIsOpen(false)}}>
                ClassName={classes.drawer}
                <div>
                    <ul>
                        <li>{redirecTo('/','Home')}</li>
                        <li>{redirecTo('/movie','Movie')}</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}
export default NavPanel