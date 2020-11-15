import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    ExploreStyle,
    ExplorePhotos,
    ExplorePhoto,
    ExplorePhotoImage,
    ExplorePhotoOverlay,
    ExplorePhotoOverlayItem,
} from 'styled/Explore';
import { ExplorePhotoOverlayItemHeartIcon, ExplorePhotoOverlayItemCommentIcon } from 'styled/StyledIcons';

export default function ExplorePage() {
    const history = useHistory();

    const handleClickProfileEditList = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/profile/psmever/edit`
        });
    }

    return (
        <React.Fragment>
            <ExploreStyle>
                <ExplorePhotos>

                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>


                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>


                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>


                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>



                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>



                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>


                    <ExplorePhoto>
                        <ExplorePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ExplorePhotoOverlay>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ExplorePhotoOverlayItem>
                            <ExplorePhotoOverlayItem>
                                <ExplorePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ExplorePhotoOverlayItem>
                        </ExplorePhotoOverlay>
                    </ExplorePhoto>

                </ExplorePhotos>
            </ExploreStyle>
        </React.Fragment>
    );
}