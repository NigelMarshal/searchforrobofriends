import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return(
		<div className='pa2'>
		<input 
			className='pa3 b b--green bg-lightest-blue'
			type ='search' 
			placeholder='Search for robot homies'
			onChange={searchChange}
		/>
		</div>
		);
}

export default SearchBox;