import { FormEvent, useState, useEffect, useRef, useMemo } from 'react';
// import { tryLogin } from 'lib/API';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction, userLoginResetAction } from 'modules/logins';
import { RootState } from 'modules';

function usePrevious(value : any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

export default function useLogin() {

    const login_state = useSelector((state: RootState) => state.login_state);

    const [ tryState , setTryState ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();


    const prevState = usePrevious(login_state.state);

    const handleChangeEmail = (email: string) => {
        setEmail(email);
    };

    const handleChangePassword = (password: string) => {
        setPassword(password);
    };

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        // if(login_state.state === "yet") {
        //     dispatch(userLoginAction({email, password}));
        // }

        dispatch(userLoginAction({email, password}));


    };

    const handleLoginInfoReset = () => {
        setEmail('');
        setPassword('');
        // dispatch(userLoginResetAction());
    }

    const nicknameLength = useMemo(() => login_state.state , [login_state.state]);



    useEffect(() => {
        console.log('componentDidMount, componentDidUpdate 역할(1:1 대응은 아님)', login_state.state); // step 1


        return () => {
            if(login_state.state === "success") {

            } else if(login_state.state === "failure") {

            }
        }

    },[login_state]);

    return {
        login_state,
        nicknameLength,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
        handleLoginInfoReset,
    };
};

