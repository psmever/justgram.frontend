import React from 'react';

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import {
    PostImageUploadComponent
} from 'components';

interface PostFormProps {
    tagString: string[];
    handleSetTags: ( tag_string: string ) => void;
}

function PostFormComponent({
    tagString,
    handleSetTags,
}: PostFormProps) {
    return (
        <form className="writer__form">
            <div className="form__row form__filebox">
                <PostImageUploadComponent/>
            </div>
        <div className="form__row">
            <textarea className="writer__textarea" defaultValue="글을 등록해 주세요."></textarea>
        </div>

        <div className="form__row">
            <ReactTagInput
                tags={tagString}
                placeholder="해시테그를 입력해 주세요."
                maxTags={10}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags: any) => handleSetTags(newTags)}
            />
        </div>

        <input className="input_box1" type="submit" value="등록" />
    </form>
    );
}

export default PostFormComponent;