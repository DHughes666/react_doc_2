import { useRef } from "react";
import SearchButton from "./refs-dom-exercise4b";
import SearchInput from "./refs-dom-exercise4c";

// Challenge 4: Focus the search field with separate components
/**
 * Make it so that clicking the 'Search' button puts focus into
 * the field. Note that each component is defined in a separate file
 * and shouldn't be moved out of it. How do you connect them together?
 */

const Page1 = () => {
    const inputRef = useRef(null);
    return (
        <>
            <nav>
                <SearchButton 
                    onClick={() => {inputRef.current.focus()}}
                />
            </nav>
            <SearchInput ref={inputRef}/>
        </>
    )
}

export default Page1;