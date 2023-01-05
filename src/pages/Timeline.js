import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { AiOutlineSearch } from 'react-icons/ai'
export default function Timeline() {

    return (
        <>
            <Header />
            <StyledTimeline>
                <StyledSearchTimeline>
                    <AiOutlineSearch />
                    <input placeholder="Search for people" />
                </StyledSearchTimeline>
                
            </StyledTimeline>
        </>
    )
}