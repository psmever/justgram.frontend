import styled from 'styled-components';

const PostMain = styled.main`
    width: 100%;
    max-width: 900px;
    margin: 45px auto;
    display: flex;
    justify-content: space-around;
`

const PostColumn = styled.div`
    width: 80%;
`
const PostBox = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    padding: 30px 0;
    text-align: center;


    &:first-child {
        margin-bottom: 10px;
        padding-left: 40px;
        padding-right: 40px;
    }
    text-decoration: none;
    color: var(--fd-blue);
`

const PostForm = styled.form`
`
const PostFormRow = styled(PostForm.withComponent('div'))`
`

const PostFormTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    border: solid 2px #1E90FF;
    border-radius: 5px;
    font-size: 0.8rem;
    resize: both;
`

const PostFormInputBox1 = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 7px;
    font-size: 14px;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background: #fafafa;
`
const PostFormInputBox2 = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 7px;
    font-size: 14px;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background: #fafafa;
`
const PostImagePreviewBox = styled.div``
const PostImagePreview = styled.img`
    max-width: 90%;
`
const PostImageMessageBox = styled.div`
    display: inline-block;
    width: 90%;
    max-width: 90%;
    color: #fff;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
    border-radius: .25em;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    background-color: #fff;
    border: 0;
    padding: 5px;
    margin-top: 15px;
    color: blue;
    font-weight: 600;
`
const PostImageUploadButton = styled.input`
    text-align: left;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`


export {
    PostMain,
    PostColumn,
    PostBox,
    PostForm,
    PostFormRow,
    PostFormTextArea,
    PostFormInputBox1,
    PostFormInputBox2,
    PostImagePreviewBox,
    PostImagePreview,
    PostImageMessageBox,
    PostImageUploadButton,

}