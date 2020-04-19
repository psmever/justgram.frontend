import React, {FormEvent} from 'react';
import * as _TYPES from 'modules/commonTypes'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import {
    PostImageUploadComponent
} from 'components';

const inputCheckDataMessageStyle = {
    'font-size': '0,6rem',
    'color': '#e88080'
};

interface PostFormProps {
    tagString: string[];
    handleSetTags: ( tag_string: string ) => void;
    handleSetContents: ( contents_string: string) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
    checkPostInputData: {state: boolean, message: string};
    post_state: _TYPES.SagaStatus
}

function PostFormComponent({
    tagString,
    handleSetTags,
    handleSetContents,
    handleSubmit,
    checkPostInputData,
    post_state,
}: PostFormProps) {
    return (
        <form className="writer__form" onSubmit={ handleSubmit }>
            <div className="form__row form__filebox">
                <PostImageUploadComponent/>
            </div>
            <div className="form__row">
                <textarea className="writer__textarea" placeholder="글을 등록해 주세요."
                    onChange={ e => handleSetContents(e.target.value)}
                >
                </textarea>
            </div>

            <div className="form__row">
                <ReactTagInput
                    tags={tagString}
                    placeholder="해시테그를 입력하고 엔터를 눌러 주세요(엔터를 눌러야지 저장 됩니다.)"
                    maxTags={10}
                    editable={true}
                    readOnly={false}
                    removeOnBackspace={true}
                    onChange={(newTags: any) => handleSetTags(newTags)}
                />
            </div>
            {checkPostInputData.state === false &&
                <div className="form__row" style={inputCheckDataMessageStyle}>{checkPostInputData.message}</div>
            }

            {post_state === 'loading'
            ? <input className="input_box1" type="submit" value="등록중" disabled={true}/>
            : <input className="input_box1" type="submit" value="등록" />
            }


    </form>
    );
}

export default PostFormComponent;