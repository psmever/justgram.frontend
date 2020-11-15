import styled from 'styled-components';

export const MainStyle = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MainPhoto = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
    margin-bottom: 65px;
`

export const PhotoHeader = styled.header`
    padding: 15px;
    display: flex;
    align-items: center;
`

export const PhotoAvatar = styled.img`
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
`

export const PhotoUserInfo = styled.div`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`

export const PhotoAuthor = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`

export const PhotoLocation = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`
// TODO: 2020-11-15 14:39 뭘로 감짤 껀지?
export const PhotoBox = styled.div`
`

export const PhotoImage = styled.img`
    max-width: 100%;
`

export const PhotoInfo = styled.div`
    padding: 15px 20px;
`

export const PhotoActions = styled.div`
    margin-bottom: 15px;
    font-size: 115%;
`

export const PhotoAction = styled.span`
    cursor: pointer;

    &:first-child {
        margin-right: 15px;
    }
`

export const PhotoLikes = styled.span`
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
`

// TODO: 2020-11-15 14:53  뭘로 감쌀 껀지?
export const PhotoComments = styled.ul``

export const PhotoComment = styled.li`
    margin-bottom: 10px;
`
export const PhotoCommentAuthor = styled.span`
    font-weight: 600;
`
export const PhotoTimeAgo = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    color: #999;
    margin-top: 10px;
    display: block;
`

export const PhotoAddCommentContainer = styled.div`
    margin-top: 15px;
    border-top: 1px solid #e6e6e6;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PhotoAddCommentTextArea = styled.textarea`
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
