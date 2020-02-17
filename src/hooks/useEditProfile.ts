import { FormEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { updateProfile, getUserProfile } from "lib/API";
import GlobalAlert from "lib/GlobalAlert";
import { APIResponseSubDataInfoType } from "modules/types";

export default function useEditPRofile() {

    const siteCodedata = useSelector((state: RootState) => state.sitedata.code_list );

    // const [state, setState] = useState<Partial<{email: string, password: string}>>();
    // const [userProfile, setUserProfile] = useState<Partial<{user_name: string, name: string, web_site: string, bio: string, gender: string}>>();
    const [genderCode, setGenderCode] = useState();

    const [profileData, setProfileData] = useState<Partial<{user_name: string, name: string, web_site: string, bio: string, phone_number: string, gender: string}> | APIResponseSubDataInfoType | undefined>({
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

    const handleSubmit = async ( event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updateResult = await updateProfile({
            name: profileData?.name,
            web_site: profileData?.web_site,
            bio: profileData?.bio,
            phone_number: profileData?.phone_number,
            gender: profileData?.gender
        });

        if(updateResult.state === true || updateResult.state === false){
            GlobalAlert.thenHistoryPush({
                text: '수정 되었습니다.',
                push_router: '/profile'
            });
        }
    }

    useEffect(() => {
        setGenderCode(siteCodedata['A21']);
        return () => {
            setGenderCode({})
        };
    }, [siteCodedata]);

    useEffect(() => {
        const getProfileData = async () => {
            const result = await getUserProfile();
            if(result.state === true) {
                setProfileData(result.data);
            }
        }
        getProfileData();
    },[]);

    return {
        profileData,
        handleChangeBio,
        handleChangeName,
        handleChangePhoneNumber,
        handleChangeWebSite,
        handleChangeGender,
        handleSubmit,
        genderCode
    };
}