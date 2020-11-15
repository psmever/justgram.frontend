import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const ExploreStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ExplorePhotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 936px;
    width: 100%;
`

export const ExplorePhoto = styled.div`
    width: 31%;
    margin-bottom: 35px;
    position: relative;
    margin-left: 20px;
`

export const ExplorePhotoImage = styled.img`
    max-width: 100%;
`

export const ExplorePhotoOverlay = styled.div`
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

export const ExplorePhotoOverlayItem = styled.span`
    font-size: 130%;
    display: flex;
    align-items: center;

    &:last-child {
        margin-left: 10px;
    }
`