import * as React from 'react';

import image_avatar from 'assets/images/avatar.jpg';

function ExploreContainer() {
    return (
        <div>
            <main id="explore">
                <ul className="explore__users">
                    <li className="explore__user">
                        <div className="explore__user-column">
                            <img src={ image_avatar } className="explore__avatar" alt="avatar"/>
                            <div className="explore__info">
                                <span className="explore__username">inthetiger</span>
                                <span className="explore__full-name">Lynn Park</span>
                            </div>
                        </div>
                        <div className="explore__user-column"><button>Follow</button></div>
                    </li>
                    <li className="explore__user">
                        <div className="explore__user-column">
                            <img src={ image_avatar }  className="explore__avatar" alt="avatar"/>
                            <div className="explore__info">
                                <span className="explore__username">inthetiger</span>
                                <span className="explore__full-name">Lynn Park</span>
                            </div>
                        </div>
                        <div className="explore__user-column"><button>Follow</button></div>
                    </li>

                    <li className="explore__user">
                        <div className="explore__user-column">
                            <img src={ image_avatar }  className="explore__avatar" alt="avatar"/>
                            <div className="explore__info">
                                <span className="explore__username">inthetiger</span>
                                <span className="explore__full-name">Lynn Park</span>
                            </div>
                        </div>
                        <div className="explore__user-column"><button>UnFollow</button></div>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default ExploreContainer;