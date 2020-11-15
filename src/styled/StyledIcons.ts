import styled from 'styled-components';
import { SearchAlt, HomeCircle } from '@styled-icons/boxicons-regular';
import { Compass } from '@styled-icons/fa-regular';



export const SearchIcon = styled(SearchAlt)`
    position: absolute;
    top: 5px;
    left: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
`

export const TopHomeIcon = styled(HomeCircle)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`
export const TopCompassIcon = styled(Compass)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`