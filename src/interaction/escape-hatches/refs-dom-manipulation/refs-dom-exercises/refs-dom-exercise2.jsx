import { useRef } from "react";
// Challenge 2: Focus the search field
/**
 * Make it so that clicking the 'Search' button puts focus
 * into the field
 */

const Page = () => {
    const pageRef = useRef(null);

    const handleSearch = () => {
        pageRef.current.focus();
    }
    return (
        <>
            <nav>
                <button onClick={handleSearch}>Search</button>
            </nav>
            <input 
                ref={pageRef}
                placeholder="Looking for something?"
            />
        </>
    )
}

export default Page;