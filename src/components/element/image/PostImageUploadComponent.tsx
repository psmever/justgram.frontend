import React, {ChangeEvent, useCallback, useState, useRef, useEffect} from 'react';

import {
    PostImagePreview,
    PostImagePreviewBox,
    PostImageMessageBox,
} from 'styles';

import { tryPostImageUpload } from "lib/API";
import * as commonTypes from "modules/commonTypes";
import usePost from "hooks/usePost";

type postImageType = {
    image: string | null,
    file: string | Blob
};

function PostImageUploadComponent() {

    const {
        __setPostImage
    } = usePost();

    const [postImage, setPostImage] = useState<postImageType>({image: '', file: ''});
    const [uploadData, setUploadData] = useState<commonTypes.CloudinaryResponseSubDataInfoType>();
    const [uploadResult, setUploadResult] = useState<commonTypes.CloudinaryResponseSubDataInfoType>();
    const isFirstPostImage = useRef(true);

    const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        if((event.target.files) && URL.createObjectURL(event.target.files[0]) && postImage.image !== URL.createObjectURL(event.target.files[0])) {
            setPostImage({
                image: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
            });
            isFirstPostImage.current = false;
        }
    }, [postImage.image]);

    const uploadPostImage = async () => {
        const result = await tryPostImageUpload(postImage.file);
        if(result.state === true) {
            setUploadData(result.data);
        }
    }

    useEffect(() =>  {
        if(uploadResult) {
            __setPostImage(uploadResult);
        }
    // TODO: 경고 처리..
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [uploadResult])


    useEffect(() =>  {
        if(uploadData) {
            setUploadResult(uploadData);
        }
    // TODO: 경고 처리..
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [uploadData])



    useEffect(() =>  {
        if(postImage.image && isFirstPostImage.current === false) {
            uploadPostImage();
        }
    // TODO: 경고 처리..
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [postImage])

    return (
        <>
            <PostImagePreviewBox>{postImage.image ? <PostImagePreview src={postImage.image} alt="post_image"/> : <></>}</PostImagePreviewBox>
            <label htmlFor="upload-button">
                <PostImageMessageBox>업로드할 이미지를 선택해주세요.</PostImageMessageBox>
            </label>
            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={(e) => _handleChange(e)}/>
        </>
      );
}
export default PostImageUploadComponent;