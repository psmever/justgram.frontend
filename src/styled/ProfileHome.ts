import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileHeader = styled.header`
    max-width: 935px;
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    font-size: 110%;
`

export const ProfileColumn = styled.div`
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
    }
`

export const ProfileTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

export const ProfileUserName = styled.h3`
    margin-right: 25px;
    font-size: 32px;
    font-weight: 300;
`

export const ProfileEditLink = styled(Link)`
    margin-right: 10px;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    padding: 5px 25px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #3f99ed;
        color: white;
        border-color: #3f99ed;
    }
`

export const ProfileStats = styled.ul`
    display: flex;
    align-items: center;

    margin-bottom: 30px;
`

export const ProfileStat = styled.li`
    margin-right: 40px;
`

export const ProfileStatNumber = styled.span`
    font-weight: 600;
`

export const ProfileBio = styled.p`
    line-height: 125%;
`

export const ProfileUserFullName = styled.span`
    font-weight: 600;
`

export const ProfileBioLink = styled(Link)`
    color: var(--link-color);
    font-weight: 600;
    text-decoration: none;
    display: block;
`

export const ProfilePhotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 936px;
    width: 100%;
`

export const ProfilePhoto = styled.div`
    width: 31%;
    margin-bottom: 35px;
    position: relative;
    margin-left: 20px;
`

export const ProfilePhotoImage = styled.img`
    max-width: 100%;
`

export const ProfilePhotoOverlay = styled.div`
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

export const ProfilePhotoOverlayItem = styled.span`
    font-size: 130%;
    display: flex;
    align-items: center;

    &:last-child {
        margin-left: 10px;
    }
`