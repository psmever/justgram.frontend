import React, {useState, ChangeEvent, useEffect, useCallback, useRef} from 'react';
import { tryProfileImageUpload, putUserProfileImage } from "lib/API";
import * as Helper from "lib/Helper";
import * as commonTypes from "modules/commonTypes";
import {

} from 'styles';


type profileImageType = {
    image: string | null,
    file: string | Blob
};

function ProfileImageComponent() {

    const profile_image_url = Helper.cookieManager.get("login_profile_image_url");
    const [profileImage, setProfileImage] = useState<profileImageType>({image: profile_image_url, file: ''});
    const [uploadData, setUploadData] = useState<commonTypes.CloudinaryResponseSubDataInfoType>();
    const isFirstProfileImage = useRef(true);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        if((event.target.files) && URL.createObjectURL(event.target.files[0]) && profileImage.image !== URL.createObjectURL(event.target.files[0])) {
            setProfileImage({
                image: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
            });
            isFirstProfileImage.current = false;
        }
    }, [profileImage.image]);

    const uploadProfileImage = async () => {
        const result = await tryProfileImageUpload(profileImage.file);
        if(result.state === true) {
            setUploadData(result.data);
        }
    }

    const updateProfileImage = async (payload: commonTypes.CloudinaryResponseSubDataInfoType) => {
        const result = await putUserProfileImage(payload);
        if(result.state === true) {
            Helper.cookieManager.set("login_profile_image_url", payload.secure_url);
        }
    }

    useEffect(() => {
        if(uploadData) {
            updateProfileImage(uploadData);
        }
    }, [uploadData]);

    useEffect(() =>  {
        if(profileImage.image && isFirstProfileImage.current === false) {
            uploadProfileImage();
        }
    // TODO: 경고 처리..
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [profileImage])


    return (
        <div>
            <label htmlFor="upload-button">
            {profileImage.image ? <img src={profileImage.image} alt="profile_image"/> : (
                <>
                    <span className="fa-stack fa-2x mt-3 mb-2">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-store fa-stack-1x fa-inverse" />
                    </span>
                    <div>Upload your photo</div>
                </>
            )}
            </label>
            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={(e) => handleChange(e)} />
        </div>
      );
}
export default ProfileImageComponent;