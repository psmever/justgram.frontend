import React from 'react';

import {
    DefaultNavComponent,
    FooterComponent,
} from 'components';


function ExplodePage() {

    return (
        <div>
            <DefaultNavComponent/>
            <main id="explore">
                <ul className="explore__users">
                    {/* {list_state === "success" && followList.map((e: any, i: number) =>
                            <ExplodeListElement
                                key={i}
                                user_id={e.user_id}
                                profile_image = {e.profile_image}
                                user_name = {e.user_name}
                                user_profile_name  = {e.user_profile_name}
                                mefollowing = {e.mefollowing}
                                clickUnFollowButton = {__handleClickUnFollowButton}
                                clickFollowButton = {__handleClickUnFollowButton}
                            />
                        )

                    } */}
                </ul>
            </main>
            <FooterComponent/>
        </div>
    );
}

export default ExplodePage;