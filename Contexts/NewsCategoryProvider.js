import React, { useState, createContext } from 'react'

const NewsCatagory = createContext()
const NewsCategoryProvider = (props) => {
    const [newsCategory, setNewsCategory] = useState("general")
    const [offLineNews , setOffLineNews] = useState(null)
    const changeNewsCategory = (category) => {
        console.log(category)
        setNewsCategory(category)
    }
    return (
        <NewsCatagory.Provider value={
            {
                activeCategory : newsCategory,
                changeNewsCategory: changeNewsCategory,
                offLineNews : offLineNews,
                setOffLineNews : setOffLineNews
            }
        }>
            {props.children}
        </NewsCatagory.Provider >
    )
}
export default NewsCategoryProvider
export {NewsCatagory}