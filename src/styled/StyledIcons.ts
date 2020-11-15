import styled from 'styled-components';
import { SearchAlt as _TopSearchIcon, HomeCircle as _TopHomeIcon } from '@styled-icons/boxicons-regular';
import { Compass as _TopCompassIcon } from '@styled-icons/fa-regular';
import { Heart as _TopHeartIcon } from '@styled-icons/remix-line';
import { HeartOutline as _PhotoHeartIcon } from '@styled-icons/evaicons-outline';
import { Comment as _PhotoCommentIcon } from '@styled-icons/evil';
import { EllipsisHorizontal as _PhotoAddCommentTextAreaIcon } from '@styled-icons/ionicons-solid';
import { Cog as _ProfileSettingIcon} from '@styled-icons/open-iconic';

import { Heart as _ProfilePhotoOverlayItemHeartIcon } from '@styled-icons/evaicons-solid';
import { Comment as _ProfilePhotoOverlayItemCommentIcon } from '@styled-icons/foundation';

export const SearchIcon = styled(_TopSearchIcon)`
    position: absolute;
    top: 5px;
    left: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
`

export const TopHomeIcon = styled(_TopHomeIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`

export const TopCompassIcon = styled(_TopCompassIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`

export const TopHeartIcon = styled(_TopHeartIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`

export const PhotoHeartIcon = styled(_PhotoHeartIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`

export const PhotoCommentIcon = styled(_PhotoCommentIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
`

export const PhotoAddCommentTextAreaIcon = styled(_PhotoAddCommentTextAreaIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
    cursor: pointer;
`

export const ProfileSettingIcon = styled(_ProfileSettingIcon)`
    font-size: 12px;
    color: rgba(var(--fe0,0,55,107),1);
    cursor: pointer;
`

export const ProfilePhotoOverlayItemHeartIcon = styled(_ProfilePhotoOverlayItemHeartIcon)`
    font-size: 130%;
    margin-right: 5px;
`

export const ProfilePhotoOverlayItemCommentIcon = styled(_ProfilePhotoOverlayItemCommentIcon)`
    font-size: 130%;
    margin-right: 5px;
`

export const ExplorePhotoOverlayItemHeartIcon = styled(_ProfilePhotoOverlayItemHeartIcon)`
    font-size: 130%;
    margin-right: 5px;
`

export const ExplorePhotoOverlayItemCommentIcon = styled(_ProfilePhotoOverlayItemCommentIcon)`
    font-size: 130%;
    margin-right: 5px;
`