import { FormEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { updateProfile, getUserProfile } from "lib/API";
import GlobalAlert from "lib/GlobalAlert";
import * as commonTypes from "modules/commonTypes";
import history from 'routes/History';

export default function useEditPRofile() {

    const siteCodedata = useSelector((state: RootState) => state.sitedata.code_list );
    const login_state = useSelector((state: RootState) => state.login_state.state );
    const login_user_name = useSelector((state: RootState) => state.login_state.user_name);
    const [genderCode, setGenderCode] = useState();

    const [getProfileDataState, setGetProfileDataState] = useState<commonTypes.SagaStatus>('idle');
    const [profileDataUpdateState, setProfileDataUpdateState] = useState<commonTypes.SagaStatus>('idle');

    const [profileData, setProfileData] = useState<Partial<{user_name: string, name: string, web_site: string, bio: string, phone_number: string, gender: string}> | commonTypes.APIResponseSubDataInfoType | undefined>({
        user_name: '',
        name: '',
        web_site: '',
        bio: '',
        phone_number: '',
        gender: ''
    });


    const handleChangeName = (name: string) => {
        setProfileData({
            ...profileData,
            name: name
        });
    }

    const handleChangeWebSite = (website: string) => {
        setProfileData({
            ...profileData,
            web_site: website
        });
    }

    const handleChangeBio = (bio: string) => {
        setProfileData({
            ...profileData,
            bio: bio
        });
    }

    const handleChangePhoneNumber = (phonenumber: string) => {
        setProfileData({
            ...profileData,
            phone_number: phonenumber
        });
    }

    const handleChangeGender = ( gender: string) => {
        setProfileData({
            ...profileData,
            gender: gender
        });
    }

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        setProfileDataUpdateState('loading');
        const updateResult = await updateProfile({
            name: profileData?.name,
            web_site: profileData?.web_site,
            bio: profileData?.bio,
            phone_number: profileData?.phone_number,
            gender: profileData?.gender
        });


        if(updateResult.state === true){
            setProfileDataUpdateState('success');
            history.push(process.env.PUBLIC_URL + process.env.PUBLIC_URL + `/${login_user_name}/profile`);
        }

        if(updateResult.state === false){
            setProfileDataUpdateState('failure');
        }
    }

    useEffect(() => {
        setGenderCode(siteCodedata['A21']);
    }, [siteCodedata]);

    useEffect(() => {
        if(login_state === "idle") {
            // history.push(process.env.PUBLIC_URL + "/");
        }

        const getProfileData = async () => {
            setGetProfileDataState('loading');
            const result = await getUserProfile();
            if(result.state === true) {
                setProfileData(result.data);
                setGetProfileDataState('success');
            } else {
                GlobalAlert.thenHistoryPush({
                    text: "프로필 정보를 가지고 오지 못했습니다.",
                    push_router: '/profile'
                });
                setGetProfileDataState('failure');
            }
        }
        getProfileData();
    }, [login_state]);

    return {
        profileData,
        handleChangeBio,
        handleChangeName,
        handleChangePhoneNumber,
        handleChangeWebSite,
        handleChangeGender,
        handleSubmit,
        genderCode,
        getProfileDataState,
        profileDataUpdateState,
    };
}