import React, {useState, FormEvent, ChangeEvent, useEffect, useCallback, useMemo, useRef} from 'react';
import default_avata from 'assets/images/default_profile.jpg';
import { tryProfileImageUpload } from "lib/API";
import { getCookie } from "lib/Helper"

type profileImageType = {
    image: string | null,
    file: string | Blob
};

function ProfileImageComponent() {

    const profile_image_url = getCookie("login_profile_image_url");


    const [profileImage, setProfileImage] = useState<profileImageType>({image: profile_image_url, file: ''});
    const isFirstProfileImage = useRef(true);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {

        if((event.target.files) && URL.createObjectURL(event.target.files[0]) && profileImage.image !== URL.createObjectURL(event.target.files[0])) {
            setProfileImage({
                image: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
            });
            isFirstProfileImage.current = false;
        }
    }, []);

    const handleUpload = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    //   const formData = new FormData()
    //   formData.append('image', image.raw)
    //   const config = { headers: { 'content-type': 'multipart/form-data' } }

    //   await uploadToBackend('endpoint', {image: image.raw}, config)
    }


    const uploadProfileImage = async () => {

        const result = await tryProfileImageUpload(profileImage.file);
        console.debug(result);
    }


    useEffect(() =>  {
        if(isFirstProfileImage.current === false) {

            uploadProfileImage();

        }

    // const saveBasicDataResult = await API.postUserProfilePhotoChange(imageFormData);

    }, [profileImage])

    // const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);

    useEffect(() => {
        // console.debug("re.render");
    })


    return (
        <div>
            <label htmlFor="upload-button">
            {profileImage.image ? <img src={profileImage.image} /> : (
            <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <div>Upload your photo</div>
            </>)}
            </label>
            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={(e) => handleChange(e)} />
        </div>
      );
}

export default ProfileImageComponent;

// const handleChange2 = (event: ChangeEvent<HTMLInputElement>): void => {
//     const target= event.target as HTMLInputElement;
//     const file: File = (target.files as FileList)[0];

//     if((event.target.files) && URL.createObjectURL(event.target.files[0]))
//     {
//         setProfileImage({
//             image: URL.createObjectURL(event.target.files[0])
//         });
//     }

//     if(event.target.files) {
//         const reader = new FileReader()
//         reader.readAsDataURL(event.target.files[0])
//         reader.onloadend = ev => {
//             console.debug(reader);
//         }
//     }
// }

    // _handleProfileImageChangeButton = async (e) => {
    //     console.debug({file: this.state.profileSelectFile});
    //     let imageFormData = new FormData();
    //     imageFormData.append('profile_image', this.state.profileSelectFile)
    //     imageFormData.append('user_uid', this.state.user_uid)
    //     // e.preventDefault();
    //     putShowLoadingAction();
    //     const saveBasicDataResult = await API.postUserProfilePhotoChange(imageFormData);
    //     putHideLoadingAction();

    //     console.debug(saveBasicDataResult);

    //     if(saveBasicDataResult.status === true) {
    //         this._getUserProfileHomeData();
    //     }
    // }