import React, { useState , useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import Styles from "../../Styles/ScrollToTop.module.css"

const ScrollToTopBtn = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
    })
    

    return (
        <IconButton
            color="primary"
            onClick={scrollToTop}
            aria-label="scroll to top"
            className={Styles.scroll_btn}
            sx={{
                position: 'fixed',
                bottom: '5px',
                right: '10px',
                display: visible ? 'inline' : 'none'
            }}>
            <ArrowCircleUpTwoToneIcon sx={{
                width: 50,
                height: 50
            }} />
        </IconButton>
    );
}
export default ScrollToTopBtn
