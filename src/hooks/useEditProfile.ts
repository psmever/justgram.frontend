import { FormEvent, useState } from 'react';

export default function useEditPRofile() {

    const [name, setName] = useState('');
    const [website, setWebSite] = useState('');
    const [bio, setBio] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const handleChangeName = (name: string) => {
        console.debug('handleChangeName');
        setName(name);
    }

    const handleChangeWebSite = (website: string) => {
        console.debug('handleChangeWebSite');
        setWebSite(website);
    }

    const handleChangeBio = (bio: string) => {
        console.debug('handleChangeBio');
        setBio(bio);
    }

    const handleChangePhoneNumber = (phonenumber: string) => {
        console.debug('handleChangePhoneNumber');
        setPhonenumber(phonenumber);
    }

    const handleSubmit = async ( event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.debug({
            name: name,
            website: website,
            bio: bio,
            phonenumber: phonenumber
        })
    }

    return {
        handleChangeBio,
        handleChangeName,
        handleChangePhoneNumber,
        handleChangeWebSite,
        handleSubmit
    };


}