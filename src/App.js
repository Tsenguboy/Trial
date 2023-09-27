import React, {useState, useEffect} from 'react';
import Logo from './svg/Logo.svg';
import CurvedBackground from './svg/CurvedBackground.svg'
import BottomRect from './svg/BottomRect.svg'
import Input from './components/inputField';
import {ReactComponent as Check} from './svg/check.svg'
import {ReactComponent as Reload} from './svg/reload.svg'
import ChevronIcon from './components/ChevronIcon';
import SearchIcon from './components/SearchIcon';
import Copyright from './svg/Copyright.svg'
import {ReactComponent as Envelope } from './svg/envelope.svg'
import {ReactComponent as Phone } from './svg/phone.svg'
import {ReactComponent as Home } from './svg/home.svg'
import {ReactComponent as Comment } from './svg/comment.svg'
import Dropdown from './components/Dropdown';
import './App.css';

function App() {

	useEffect(() => {
		const vw = window.innerWidth;
	document.documentElement.style.setProperty('--vw', `${vw}px`);
	}, []);

	const [selectHoverColor, setSelectHoverColor] = useState('white')
	const [requestChevron, setRequestChevron] = useState('white')
	const [searchHover, setSearchHover] = useState('white')

	const [clickedIndex, setClickedIndex] = useState(1)

	const [serviceClicked , setServiceClicked] = useState(true)
	const [requestClicked, setRequestClicked] = useState(false)
	const [footerClickIndex, setFooterClickIndex] = useState(0)

	const [requestFieldValue, setRequestFieldValue] = useState('')
	const [roleFieldValue, setRoleFieldValue] = useState('')
	const [locationFieldValue, setLocationFieldValue] = useState('')
	const [numberFieldValue, setNumberFieldValue] = useState('')
	const [reasonValue, setReasonValue] = useState('')
	const [descriptionValue, setDescriptionValue] = useState('')

	const serviceClickHanlder = () => {
		console.log("Direct to Explore Service page")
		setServiceClicked(!serviceClicked)
		setRequestClicked(false)
		setClickedIndex(1)
		if (clickedIndex === 1) {
			setClickedIndex (0)
		}
	}
	const requestClickHandler = () => {
		console.log("Direct to Online Request page")
		setRequestClicked(!requestClicked)
		setServiceClicked(false)
		setClickedIndex(2)
		if (clickedIndex === 2) {
			setClickedIndex (0)
		}
	}
	const answerClickHandler = () => {
		console.log("Direct to Find Answer page")
		setClickedIndex(3)
		setRequestClicked(false)
		setServiceClicked(false)
		if (clickedIndex === 3) {
			setClickedIndex (0)
		}
	}
	const tickedClickHandler = () => {
		console.log("Direct to My Tickets page")
		setClickedIndex(4)
		setRequestClicked(false)
		setServiceClicked(false)
		if (clickedIndex === 4) {
			setClickedIndex (0)
		}
	}
	const searchClickHandler = () => {
		console.log("Search button pressed")
		setClickedIndex(5)
		if (clickedIndex === 5) {
			setClickedIndex(0)
		}
	}
	const footerEnvelopeHandler = () => {
		console.log("Envelope Button clicked")
		setFooterClickIndex(1)
		if (footerClickIndex === 1) {
			setFooterClickIndex(0)
		}
	}
	const footerPhoneHandler = () => {
		console.log("Phone Button clicked")
		setFooterClickIndex(2)
		if (footerClickIndex === 2) {
			setFooterClickIndex(0)
		}
	}
	const footerHomeHandler = () => {
		console.log("Home Button Clicked")
		setFooterClickIndex(3)
		if (footerClickIndex === 3) {
			setFooterClickIndex(0)
		}
	}
	const footerCommentHandler = () => {
		console.log("Comment Button Clicked")
		setFooterClickIndex(4)
		if (footerClickIndex === 4) {
			setFooterClickIndex(0)
		}
	}

	const resetButtonHandler = () => {
		console.log("Reset Button Clicked")
		setRequestFieldValue('')
		setRoleFieldValue('')
		setLocationFieldValue('')
		setNumberFieldValue('')
		setReasonValue('')
		setDescriptionValue('')
	}

	const handleHover = () => {
		setSelectHoverColor('#9966b3') // Change the fill color on hover
	};
	const handleRequestChevron = () => {
		setRequestChevron('#9966b3')
	}
	const handleSearchHover = () => {
		setSearchHover('#9966b3')
	}
	const handleMouseLeave = () => {
		setSelectHoverColor('white'); // Reset fill color when the mouse leaves
	};
	const handleRequestChevronLeave = () => {
		setRequestChevron('white')
	}
	const handleSearchHoverLeave = () => {
		setSearchHover('white')
	}

	const handleMenuOne = () => {
		console.log('clicked one');
	};
	
	const handleMenuTwo = () => {
		console.log('clicked two');
	};
	return (
		<div className="App">
			<img src={CurvedBackground} className = "background" alt ="Background"/>
			<div className = "container">
				<div className = "overlay" style={{ display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
					<div>
						<img src = {Logo} alt="SchoolLogo"/>
					</div>
					<div style={{display: 'flex', justifyContent: 'end'}}>
						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick={() => serviceClickHanlder()} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
								<span style={{marginRight: '0.5rem'}}>
									Explore Services
								</span>
								<ChevronIcon hover={selectHoverColor} clicked={serviceClicked}/>
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 1 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => requestClickHandler()} onMouseEnter={handleRequestChevron} onMouseLeave={handleRequestChevronLeave}>
								<span style={{marginRight: '0.5rem'}}>
									Online Request
								</span>
								<ChevronIcon hover={requestChevron} clicked = {requestClicked}/>
								{/* <img src={ChevronSvg} style={{
									transition: "transform .5s",
									transform: `rotate(${requestClicked ? 0: 180}deg)`,
									transformOrigin: 'center center',
								}}/> */}
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 2 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => answerClickHandler()}>
								<span>Find Answers</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="auto" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="124" height="2" fill={`${clickedIndex === 3 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick = {() => tickedClickHandler()}>
								<span>My Tickets</span>
							</button>
							<div className = 'selectFromRow'>
								<svg width="100%" height="2" viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="100%" height="2" fill={`${clickedIndex === 4 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

						<div style = {{display: 'flex', flexDirection: 'column'}}>
							<button className='selectFromRow' onClick ={() => searchClickHandler()} onMouseEnter={handleSearchHover} onMouseLeave={handleSearchHoverLeave}>
								<SearchIcon hover={searchHover} clicked={clickedIndex === 5}/>
							</button>
							<div className = 'selectFromRow'>
								<svg width="100%" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="100%" height="2" fill={`${clickedIndex === 5 ? '#FDD141': 'transparent'}`}/>
								</svg>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className = "bodyContainer" style={{display: 'flex', justifyContent: 'space-between', marginRight: '7%'}}>
				{/* input field form */}
				<div className = "form" style={{marginTop: '4.44vh'}}> 
					<div> {/* 6 fields, 3 rows and 2 columns */}
						<div style= {{display: 'flex', justifyContent: 'space-between'}}> {/*row 1 */}
							<Input labelName='Requester' value={requestFieldValue} onChange = {(e) => setRequestFieldValue(e.target.value)}/>
							<Input labelName = "Role" value = {roleFieldValue} onChange = {(e) => setRoleFieldValue(e.target.value)}/>
						</div>
						<div style= {{display: 'flex', justifyContent: 'space-between'}}> {/*row 2*/}
							<Input labelName='Location' value = {locationFieldValue} onChange = {(e) => setLocationFieldValue(e.target.value)}/>
							<Input labelName = 'Contact Number' value = {numberFieldValue} onChange = {(e) => setNumberFieldValue(e.target.value)}/>
						</div>
						<div style= {{display: 'flex', justifyContent: 'space-between'}}> {/*row 3*/}
							<Input labelName='How can we help you with?' value = {reasonValue} onChange = {(e) => setReasonValue(e.target.value)}/>
							<div>
								<div className = "input" style= {{marginBottom: '0.5rem', padding: 0}}>
									<span>{'Select Service type'}</span>
								</div>
								<Dropdown
								menu={[
									<button className = "inputSmall" onClick={handleMenuOne}>Menu 1</button>,
									<button className = "inputSmall" onClick={handleMenuTwo}>Menu 2</button>,
								]}
								/>
							</div>
						</div>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<Input labelName='Short description' large={true}  value = {descriptionValue} onChange = {(e) => setDescriptionValue(e.target.value)}/>
						</div>

						<div style={{textAlign: 'end', paddingRight: '0.65rem', marginTop: '4vh'}}>
							<button className='resetButton' onClick = {() => resetButtonHandler()}>
								<Reload/>
								<span style={{fontFamily: 'Gotham', fontSize: '14px', color: '#615D66', marginLeft: '1rem', marginRight: '1rem'}}>
									Reset Form
								</span>
							</button>
							<button className='submitButton' style={{verticalAlign: 'center'}}>
								<Check/>
								<span style={{fontFamily: 'Gotham', fontSize: '14px', color: '#FFFFFF', marginLeft: '1rem', marginRight: '1rem'}}>
									Submit
								</span>
							</button>
						</div>
					</div>
				</div>
				{/* input field form end*/}

				<div style={{maxWidth: '34.72vw', marginTop: '8vh'}}>
					<h3 className='header'>
						Shanghai Communication Group
					</h3>
					<div style={{width: '27.78vw'}}>
						<body className='description'>
							NYU Shanghai is China's first Sino-US research university and the third degree-granting campus of the NYU Global Network.
						</body>
						<body className='description' style={{marginTop: '1.11vh'}}>
							We were founded in 2012 by New York University and East China Normal University with the support of the city of Shanghai and the district of Pudong.
						</body>
					</div>
				</div>
			</div>
			<div>
				<div className='footerContent' style={{width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
					<div>
						<div style={{marginTop: '3.11vh', color: 'white'}}>
							<img src={Copyright} alt="copyright" style={{}}/>
							<span style={{marginLeft: '2rem', fontSize: '0.84vw'}}>
								Copyright NYU Shanghai Technology Services
							</span>
						</div>
						<div style={{display: 'flex', justifyContent: 'center', marginTop: '1.11vh'}}>
							<button className={`${footerClickIndex === 1 ? 'footerButtonClicked' : 'footerButton'}`} onClick={() => footerEnvelopeHandler()}>
								<Envelope/>
							</button>
							<button className={`${footerClickIndex === 2 ? 'footerButtonClicked' : 'footerButton'}`} onClick={() => footerPhoneHandler()}>
								<Phone/>
							</button>
							<button className={`${footerClickIndex === 3 ? 'footerButtonClicked' : 'footerButton'}`} onClick={() => footerHomeHandler()}>
								<Home/>
							</button>
							<button className={`${footerClickIndex === 4 ? 'footerButtonClicked' : 'footerButton'}`} onClick={() => footerCommentHandler()}>
								<Comment/>
							</button>
						</div>
					</div>
				</div>
				<div className='footer'>
					<img style={{width: '100vw'}} src={BottomRect} alt="Footer"/>
				</div>
			</div>
			{/* <div>
				<img src={BottomRectangle} alt="Footer"/>
			</div> */}
		</div>
	);
}

export default App;
