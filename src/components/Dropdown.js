import React, {useState} from "react";
import ChevronIcon from '../components/ChevronIcon';
import '../Dropdown.css';
import '../App.css'
const Dropdown = ({ menu, labelName }) => {

    const [open, setOpen] = React.useState(false)
    const [chevronClick, setChevronClick] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const [dropdownClicked, setDropdownClicked] = useState(false)
    const dropdownHandler = () => {
        handleOpen()
        setChevronClick(!chevronClick)
        setDropdownClicked(!dropdownClicked)
        console.log('asdf')
    }

    return (
    <div className="dropdown">
            <div className = "input" style= {{marginBottom: '0.5rem', padding: 0, backgroundColor:'red'}}>
                <span>{labelName}</span>
            </div>

        <button className = {`${dropdownClicked ? 'inputSmallButtonClicked': 'inputSmallButton'}`} onClick={() => dropdownHandler()} 
            style={{backgroundColor: 'transparent', textAlign:'end', paddingRight: '1rem'}}>
            <ChevronIcon hover={'#615D66'} clicked={chevronClick}/>
        </button>

        {open ? (
        <ul className="menu">
            {menu.map((menuItem, index) => (
                <li key={index} className="menu-item">
                    {React.cloneElement(menuItem, {
                        onClick: () => {
                            menuItem.props.onClick()
                            setOpen(false)
                        },
                    })}
                </li>
            ))}
        </ul>
        ) : null}
    </div>
    );
};

export default Dropdown