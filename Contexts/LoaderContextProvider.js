import React,{createContext,useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loader = createContext(null)
const LoaderContextProvider = (props) => {
    const loader = useRef(null)
    return (
        <Loader.Provider value={loader}>
            <LoadingBar color='#f11946' ref={loader} height = {4}  />
            {props.children}
        </Loader.Provider>
    )
}

export default LoaderContextProvider
export {Loader}
