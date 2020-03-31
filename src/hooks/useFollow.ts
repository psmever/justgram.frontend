
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import {
    requestGetFollowerslistAction,
    requestGetFollowinglistAction,
    requestUserFollowAction,
    requestUserUnFollowAction
} from "modules/follows";

export default function useExplores() {

    const dispatch = useDispatch();

    const followers_state = useSelector((state: RootState) => state.follows_state.followers);
    const following_state = useSelector((state: RootState) => state.follows_state.following);

    const __handleGetFollowersList = (user_name: string) => {
        dispatch(requestGetFollowerslistAction({
            user_name: user_name
        }));
    }

    const __handleGetFollowingList = (user_name: string) => {
        dispatch(requestGetFollowinglistAction({
            user_name: user_name
        }));
    }

    const __handleClickUnFollowButton = (user_id: number) => {
        console.debug('__handleClickUnFollowButton');
        dispatch(requestUserUnFollowAction({
            target_user_id: user_id
        }));
    }

    const __handleClickFollowButton = (user_id: number) => {
        console.debug('__handleClickFollowButton');
        dispatch(requestUserFollowAction({
            target_user_id: user_id
        }));
    }

    return {
        followers_state,
        following_state,
        __handleGetFollowersList,
        __handleGetFollowingList,
        __handleClickFollowButton,
        __handleClickUnFollowButton,

    }
}