import {getSmartCurrentPageId} from '../Router'

const pageId = getSmartCurrentPageId()

export const Video = () => {
            return /*html*/`
       <video autoplay loop muted id="${pageId === "home" ? "video" : "video"}">
                <source src="https://innovasleeptech.com/wp-content/uploads/2023/01/video-bg.mp4" >
        </video>
`;  
    
    	
}