import React, {FormEvent} from 'react';
import * as _TYPES from 'modules/commonTypes'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import {
    PostForm,
    PostFormRow,
    PostFormTextArea,
    PostFormInputBox1,
    PostFormInputBox2,
} from 'styles';

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
        <PostForm onSubmit={ handleSubmit }>
            <PostFormRow>
                <PostImageUploadComponent/>
            </PostFormRow>
            <PostFormRow>
                <PostFormTextArea placeholder="글을 등록해 주세요."
                    onChange={ e => handleSetContents(e.target.value)}
                >
                </PostFormTextArea>
            </PostFormRow>

            <PostFormRow>
                <ReactTagInput
                    tags={tagString}
                    placeholder="해시테그를 입력하고 엔터를 눌러 주세요(엔터를 눌러야지 저장 됩니다.)"
                    maxTags={10}
                    editable={true}
                    readOnly={false}
                    removeOnBackspace={true}
                    onChange={(newTags: any) => handleSetTags(newTags)}
                />
            </PostFormRow>
            {checkPostInputData.state === false &&
                <PostFormRow style={inputCheckDataMessageStyle}>{checkPostInputData.message}</PostFormRow>
            }

            {post_state === 'loading'
            ? <PostFormInputBox1 type="submit" value="등록중" disabled={true}/>
            : <PostFormInputBox2 type="submit" value="등록" />
            }


    </PostForm>
    );
}

export default PostFormComponent;