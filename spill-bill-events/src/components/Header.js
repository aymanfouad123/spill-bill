import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {

    const onClick = () => {
        console.log("Link this to Harsh's page")
    }


    return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn' onClick={onClick}>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title : 'Event Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header