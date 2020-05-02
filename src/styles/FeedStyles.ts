import styled from 'styled-components';

const FeedMainStyle = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const PhotoStyle = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
    margin-bottom: 65px;
`

const PhotoHeaderStyle = styled.header`
    padding: 15px;
    display: flex;
    align-items: center;
`

const PhotoHeaderAvatarStyle = styled.img`
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
`

const PhotouserInfoStyle = styled.div`
    a {
        text-decoration: none;
        color: var(--fd-blue);
    }
`
const PhotouserInfoAuthorStyle = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`

const PhotouserInfoLocationSttyle = styled.span`
`

const PhotoFeedPhotoStyle = styled.div`
    text-align: center;
    max-width: 100%;
`

const PhotoFeedPhotoimgStyle = styled.img`
    max-width: 100%;
`

const PhotoInfoStyle = styled.div`
    padding: 15px 20px;
`

const PhotoActionsStyle = styled.div`
    margin-bottom: 15px;
    font-size: 115%;

    :first-child {
    margin-right: 15px;
    }
`

const PhotoActionStyle = styled.span`
    cursor: pointer;
`

const PhotoLikes = styled.span`
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
`

const PhotoComments = styled.ul`
`
const PhotoComment = styled.li`
    margin-bottom: 10px;
`
const PhotoCommentAuthor = styled.span`
    font-weight: 600;
`

const PhotoTimeAgo = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    color: #999;
    margin-top: 10px;
    display: block;
`

const PhotoAddCommentContainer = styled.div`
    margin-top: 15px;
    border-top: 1px solid #e6e6e6;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhotoAddCommentContainerTextArea = styled.textarea`
    width: 90%;
    border: 0;
    font-size: 14px;
    resize: none;
    height: 20px;

    &:focus {
        outline: none;
    }

    &:active {
        outline: none;
    }
`

const PhotoAddCommentContainerTextAreaI = styled.i`
    cursor: pointer;
`

export {
    FeedMainStyle,
    PhotoStyle,
    PhotoHeaderStyle,
    PhotoHeaderAvatarStyle,
    PhotouserInfoStyle,
    PhotouserInfoAuthorStyle,
    PhotouserInfoLocationSttyle,
    PhotoFeedPhotoStyle,
    PhotoFeedPhotoimgStyle,
    PhotoInfoStyle,
    PhotoActionsStyle,
    PhotoActionStyle,
    PhotoLikes,
    PhotoComments,
    PhotoComment,
    PhotoCommentAuthor,
    PhotoTimeAgo,
    PhotoAddCommentContainer,
    PhotoAddCommentContainerTextArea,
    PhotoAddCommentContainerTextAreaI,
}