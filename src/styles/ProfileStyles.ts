import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        margin-top: 50px;
    }
`

const ProfileHeader = styled.header`
    max-width: 935px;
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    font-size: 110%;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        flex-direction: column;
        align-items: center;
    }
`

const ProfileColumnImage = styled.div`
    width: 70%;

    &:first-child {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:first-child img {
        border-radius: 50%;
        transform-style: preserve-3d;
        transition: transform 0.5s linear;
        animation: rotateLynn 1s linear infinite;
        width: 150px;
        height: 150px;
    }
`

const rotateLynn = keyframes`
    from {
        transform: rotateY(0turn);
    }
    to {
        transform: rotateY(1turn);
    }
`

const ProfileColumn = styled.div`
    width: 70%;

    &:first-child {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:first-child img {
        border-radius: 50%;
        transform-style: preserve-3d;
        transition: transform 0.5s linear;
        animation: ${rotateLynn} 1s linear infinite;
        width: 150px;
        height: 150px;
    }
`

const ProfileTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    a {
        margin-right: 10px;
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        padding: 5px 25px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: #3f99ed;
        color: white;
        border-color: #3f99ed;
    }

    i {
        cursor: pointer;
        transition: transform 1s ease-in;
    }

    i:hover {
        transform: rotate(2turn);
    }

    @media screen and (min-width: 375px) and (max-width: 667px) {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
`

const ProfileUsername = styled.h3`
    margin-right: 25px;
    font-size: 32px;
    font-weight: 300;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        margin: 20px 0;
    }
`

const ProfileStats = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        text-align: center;
        margin-right: 0;
    }
`
const ProfileStat = styled.li`
    margin-right: 40px;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        text-align: center;
        margin-right: 0;
    }
`

const ProfileStatLink = styled(Link)`
    border: 2px solid #f4f4f4;
    border-radius: 5px;
    background-color: #00ae9673;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    margin : 20px;
    padding: 10px 20px 10px 20px;
    display: inline-block;

    &:hover {
        border: 2px solid #009900;
        background-color: #00cc00;
    }

    @media screen and (min-width: 375px) and (max-width: 667px) {
        text-align: center;
        margin: 0px;
    }
`

const ProfileStatNumber = styled.span`
    font-weight: 600;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        display: block;
    }
`
const ProfileFullName = styled.span`
    font-weight: 600;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        display: block;
    }
`
const ProfileBio = styled.p`
    a {
        color: var(--link-color);
        font-weight: 600;
        text-decoration: none;
        display: block;
    }

    line-height: 125%;
`

const ProfilePhotosSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 936px;
    width: 100%;
`

const ProfilePhoto = styled.div`
    width: 31%;
    margin-bottom: 35px;
    position: relative;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        width: 33%;
        margin-bottom: 0;
    }
`

const ProfilePhotoImage = styled.img`
    max-width: 100%;

    /* @media screen and (min-width: 375px) and (max-width: 667px) {
        width: 33%;
        margin-bottom: 50px;
    } */
`

const ProfilePhotoOverlay = styled.div`
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
        opacity: 1;
    }
`

const ProfilePhotoOverlayItem = styled.span`
    font-size: 130%;
    display: flex;
    align-items: center;

    &:last-child {
        margin-left: 10px;
        /**/
    }

    i {
        font-size: 130%;
        margin-right: 5px;
    }
`

export {
    ProfileMain,
    ProfileHeader,
    ProfileColumnImage,
    ProfileColumn,
    ProfileTitle,
    ProfileUsername,
    ProfileStats,
    ProfileStat,
    ProfileStatLink,
    ProfileStatNumber,
    ProfileFullName,
    ProfileBio,
    ProfilePhotosSection,
    ProfilePhoto,
    ProfilePhotoImage,
    ProfilePhotoOverlayItem,
    ProfilePhotoOverlay,
}