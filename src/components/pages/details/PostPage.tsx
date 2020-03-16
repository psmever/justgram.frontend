import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent,
    PostImageUploadComponent
} from 'components';

function PostPage() {
    return (
        <div>
            <DefaultNavComponent/>

            <main id="writer">
                <div className="writer__column">
                    <div className="writer__box">
                        <form className="writer__form">
                            <div className="form__row form__filebox">
                                <PostImageUploadComponent/>
                            </div>

                            <div className="form__row">
                                <textarea className="writer__textarea" defaultValue="글을 등록해 주세요."></textarea>
                            </div>

                            <div className="form__row">
                                <input
                                    name="hash_tag"
                                    type="text"
                                    className="form__input2"
                                    placeholder="해시테그 를 입력해 주세요."
                                />
                            </div>

                            <input type="submit" value="등록" />
                        </form>
                    </div>
                </div>
            </main>

            <FooterComponent/>
        </div>
    );
}

export default PostPage;