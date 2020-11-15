import React from 'react';
import {
    RecommendStyle,
    RecommendUsers,
    RecommendUser,
    RecommendUserColumn,
    RecommendUserAvatar,
    RecommendUserInfo,
    RecommendUserName,
    RecommendUserFullName,
    RecommendUserColumnButton,
} from 'styled/Recommend';

export default function RecommendPage() {

    return (
        <>
            <RecommendStyle>
                <RecommendUsers>

                    <RecommendUser>
                        <RecommendUserColumn>
                            <RecommendUserAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt=""/>
                            <RecommendUserInfo>
                                <RecommendUserName>inthetiger</RecommendUserName>
                                <RecommendUserFullName>Lynn Park</RecommendUserFullName>
                            </RecommendUserInfo>
                        </RecommendUserColumn>
                        <RecommendUserColumn>
                            <RecommendUserColumnButton>Follow</RecommendUserColumnButton>
                        </RecommendUserColumn>
                    </RecommendUser>

                    <RecommendUser>
                        <RecommendUserColumn>
                            <RecommendUserAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt=""/>
                            <RecommendUserInfo>
                                <RecommendUserName>inthetiger</RecommendUserName>
                                <RecommendUserFullName>Lynn Park</RecommendUserFullName>
                            </RecommendUserInfo>
                        </RecommendUserColumn>
                        <RecommendUserColumn>
                            <RecommendUserColumnButton>Follow</RecommendUserColumnButton>
                        </RecommendUserColumn>
                    </RecommendUser>


                    <RecommendUser>
                        <RecommendUserColumn>
                            <RecommendUserAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt=""/>
                            <RecommendUserInfo>
                                <RecommendUserName>inthetiger</RecommendUserName>
                                <RecommendUserFullName>Lynn Park</RecommendUserFullName>
                            </RecommendUserInfo>
                        </RecommendUserColumn>
                        <RecommendUserColumn>
                            <RecommendUserColumnButton>Follow</RecommendUserColumnButton>
                        </RecommendUserColumn>
                    </RecommendUser>


                    <RecommendUser>
                        <RecommendUserColumn>
                            <RecommendUserAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt=""/>
                            <RecommendUserInfo>
                                <RecommendUserName>inthetiger</RecommendUserName>
                                <RecommendUserFullName>Lynn Park</RecommendUserFullName>
                            </RecommendUserInfo>
                        </RecommendUserColumn>
                        <RecommendUserColumn>
                            <RecommendUserColumnButton>Follow</RecommendUserColumnButton>
                        </RecommendUserColumn>
                    </RecommendUser>

                </RecommendUsers>
            </RecommendStyle>
        </>
    );
}