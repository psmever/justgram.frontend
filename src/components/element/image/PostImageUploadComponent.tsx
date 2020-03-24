import React, {ChangeEvent, useCallback, useState, useRef, useEffect} from 'react';
import { tryPostImageUpload } from "lib/API";
import { CloudinaryResponseSubDataInfoType } from "modules/types";
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
    const [uploadData, setUploadData] = useState<CloudinaryResponseSubDataInfoType>();
    const [uploadResult, setUploadResult] = useState<CloudinaryResponseSubDataInfoType>();
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
        <div>
            <div>{postImage.image ? <img className="image_preview" src={postImage.image} alt="post_image"/> : <></>}</div>
            <label htmlFor="upload-button">
                <div className="form__filebox">업로드할 이미지를 선택해주세요.</div>
            </label>
            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={(e) => _handleChange(e)}/>
        </div>
        </>
      );
}
export default PostImageUploadComponent;